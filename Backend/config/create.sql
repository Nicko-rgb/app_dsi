-- Active: 1743786824105@@127.0.0.1@3306@miapp
CREATE DATABASE dbDsiApp
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

CREATE TABLE posts (
    id_post INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    texto TEXT NULL, -- post solo texto
    text_fondo VARCHAR,
    media_path VARCHAR(255) NULL, -- ruta al archivo multimedia (imagen/video)
    media_type ENUM('imagen', 'video') NULL,
    descripcion TEXT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE CASCADE
);

CREATE TABLE comentarios (
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    id_post INT,
    id_user INT,
    contenido VARCHAR(255),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_post) REFERENCES posts(id_post) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE CASCADE
);

CREATE TABLE likes (
    id_like INT AUTO_INCREMENT PRIMARY KEY,
    id_post INT,
    id_user INT,
    likes INT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_post) REFERENCES posts(id_post) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE CASCADE
);
