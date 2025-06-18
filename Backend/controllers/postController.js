const path = require('path');
const fs = require('fs');
const { pool } = require('../config/db');

// Crear post
const createPost = async (req, res) => {
    const { id_user, texto, descripcion, media_type } = req.body;
    const file = req.files?.file;

    try {
        let media_path = null;

        if (file) {
            const filename = Date.now() + '-' + file.name;
            const uploadPath = path.join(__dirname, '../files/posts', filename);
            await file.mv(uploadPath);
            media_path = `/media/posts/${filename}`;
        }

        await pool.execute(
            `INSERT INTO posts (id_user, texto, descripcion, media_path, media_type)
             VALUES (?, ?, ?, ?, ?)`,
            [id_user, texto || null, descripcion || null, media_path, media_type || null]
        );

        res.json({ message: 'Post creado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al crear post' });
    }
};

// Obtener feed (no vistas primero, luego aleatorias)
const getFeedPosts = async (req, res) => {
    const { id_user } = req.params;

    try {
        const [noVistas] = await pool.execute(`
            SELECT p.*, u.nombres, u.apellidos, u.foto_perfil
            FROM posts p
            JOIN users u ON p.id_user = u.id_user
            WHERE p.id_post NOT IN (
                SELECT id_post FROM post_vistos WHERE id_user = ?
            )
            ORDER BY p.fecha_registro DESC
            LIMIT 10
        `, [id_user]);

        if (noVistas.length > 0) {
            return res.json(noVistas);
        }

        const [aleatorias] = await pool.execute(`
            SELECT p.*, u.nombres, u.apellidos, u.foto_perfil
            FROM posts p
            JOIN users u ON p.id_user = u.id_user
            ORDER BY RAND()
            LIMIT 10
        `);

        res.json(aleatorias);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener posts' });
    }
};

// Marcar como visto
const markAsViewed = async (req, res) => {
    const { id_user, id_post } = req.body;

    try {
        await pool.execute(`
            INSERT IGNORE INTO post_vistos (id_user, id_post)
            VALUES (?, ?)
        `, [id_user, id_post]);

        res.json({ message: 'Post marcado como visto' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al marcar como visto' });
    }
};

module.exports = {
    createPost,
    getFeedPosts,
    markAsViewed
}