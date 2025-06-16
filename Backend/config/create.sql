-- Active: 1743786824105@@127.0.0.1@3306@miapp
CREATE DATABASE miapp
    DEFAULT CHARACTER SET = 'utf8mb4';
    
USE miapp;

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
