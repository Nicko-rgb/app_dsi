require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
// CORS configuration
app.use(cors({
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// ruta raiz devolver un archivo index.html
app.get('/', (req, res) => {
    res.send('Hola desde el servidor')
})

// ruta para datos de usuarios
app.use('/api/users', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => { 
    console.log(`http://localhost:${PORT}`);
});
