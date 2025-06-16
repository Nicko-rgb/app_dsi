const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config(); // Carga las variables de entorno desde .env

const dbConfig = {
    host: process.env.DB_HOST || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
};

// Crear un pool de conexiones
const pool = mysql.createPool(dbConfig);

// Función para probar la conexión
async function testConnection() {
    let connection;
    try {
        connection = await pool.getConnection();
        console.log('Conectado a MySQL');
    } catch (err) {
        console.error('Error conectando a MySQL:', err);
    } finally {
        if (connection) {
            connection.release(); // Liberar la conexión
        }
    }
}

// Probar la conexión al iniciar el servidor
testConnection();

module.exports = { pool };
