require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middlewares
app.use(cors({ credentials: true, origin: true }));
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Servir archivos multimedia
app.use('/media/posts', express.static(path.join(__dirname, 'files/posts')));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// Arranque del servidor
const PORT = process.env.PORT || 5051;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
