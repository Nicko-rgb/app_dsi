const path = require('path');
const fs = require('fs');
const { pool } = require('../config/db');

// Crear post
const createPost = async (req, res) => {
    const { id_user, texto, descripcion, media_type, fondos_text } = req.body;
    let media_path = null;

    try {
        // Si hay archivo subido con multer, accede desde req.file
        if (req.file) {
            media_path = `/media/posts/${req.file.filename}`;
        }

        // Parsear fondos_text si viene como string
        let fondosJson = null;
        if (fondos_text) {
            fondosJson = typeof fondos_text === 'string' ? JSON.parse(fondos_text) : fondos_text;
        }

        await pool.execute(
            `INSERT INTO posts (id_user, tipo, texto, fondos_text, descripcion, media_path, media_type)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                id_user,
                media_type ? media_type : 'texto',
                texto || null,
                fondosJson ? JSON.stringify(fondosJson) : null,
                descripcion || null,
                media_path,
                media_type || null
            ]
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