const express = require('express');
const router = express.Router();
const { verificaEmail, registro, login } = require('../controllers/userController');

// Route to verify email
router.post('/verifica-email', verificaEmail);

// Ruta para hacer registro de usuario
router.post('/registro', registro);

// Ruta para inicio de sesión
router.post('/login', login);

module.exports = router;