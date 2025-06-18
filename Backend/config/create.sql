-- Active: 1733845747041@@127.0.0.1@3306@dbdsiapp
CREATE DATABASE dbDsiApp
    DEFAULT CHARACTER SET = 'utf8mb4';
    
USE dbDsiApp;

CREATE TABLE users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    carrera VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    descripcion VARCHAR(100) NULL,
    foto_perfil VARCHAR(255) NULL -- ruta a la imagen
);