const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const verificaEmail = async (req, res) => {
    const { email } = req.body;

    try {
        const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [email]);
        const existe = rows.length > 0;
        return res.status(200).json({existe: existe});

    } catch (error) {
        console.error('Error al verificar email:', error);
        return res.status(500).json({
            existe: false,
            msg: 'Error al verificar el email'
        });
    }
};

const registro = async (req, res) => {
    const { nombres, apellidos, carrera, email, password } = req.body;

    try {
        // Verificar si el email ya existe
        const [existingUser] = await pool.execute("SELECT * FROM users WHERE email = ?", [email.toLowerCase()]);
        if (existingUser.length > 0) {
            return res.status(400).json({
                success: false,
                msg: 'El email ya está registrado'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // Insert new user
        const query = "INSERT INTO users (nombres, apellidos, carrera, email, password) VALUES (?, ?, ?, ?, ?)";
        const [rows] = await pool.execute(query, [nombres, apellidos, carrera, email.toLowerCase(), hashedPassword]);

        // Generate JWT token
        const token = jwt.sign({ userId: rows.insertId }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        return res.status(201).json({
            success: true,
            msg: 'Usuario registrado exitosamente',
            user: {
                id_user: rows.insertId,
                nombres: nombres,
                apellidos: apellidos,
                carrera: carrera,
                email: email.toLowerCase(),
                token: token
            }
        });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        return res.status(500).json({
            success: false,
            msg: 'Error en el servidor al registrar usuario'
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const query = "SELECT * FROM users WHERE email = ?";
        const [users] = await pool.execute(query, [email.toLowerCase()]); // Normalize email

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                msg: 'Contraseña incorrecta'
            });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id_user }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        
        // enviamos datos completos del usuario y token
        return res.status(200).json({
            success: true,
            msg: 'Inicio de sesión exitoso',
            user: {
                id_user: user.id_user,
                nombres: user.nombres,
                apellidos: user.apellidos,
                carrera: user.carrera,
                email: user.email,
                token: token
            }
        });

    } catch (error) {
        console.error('Error en inicio de sesión:', error);
        return res.status(500).json({
            success: false,
            msg: 'Error en el servidor'
        });
    }
};

// Add to exports
module.exports = {
    verificaEmail,
    registro,
    login
};