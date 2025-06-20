# DSI App

DSI App es una aplicación tipo red social orientada a desarrolladores e informáticos, donde los usuarios pueden compartir publicaciones, interactuar, y acceder a contenido relevante para la comunidad tech. El proyecto está dividido en dos partes: un backend con Node.js/Express y una app móvil desarrollada con React Native y Expo.

## Características principales
- Registro y autenticación de usuarios
- Publicación de posts (texto, imágenes, videos)
- Comentarios y likes en publicaciones
- Chats entre usuarios
- Perfiles de usuario personalizables
- Contenido y recursos para desarrolladores

## Estructura del proyecto
```
app_dsi/
  ├── Backend/         # API REST, base de datos y lógica de negocio
  └── Client/          # Aplicación móvil React Native
```

### Backend
- **Node.js + Express**
- **Base de datos MySQL** (ver `Backend/config/create.sql` para el modelo)
- **Autenticación JWT**
- **Manejo de archivos multimedia**
- Rutas principales:
  - `/api/users` (usuarios)
  - `/api/posts` (publicaciones)

### Frontend (Client)
- **React Native** (Expo)
- **Navegación**: React Navigation
- **Gestión de estado**: Zustand, Context API
- **Carga y visualización de imágenes/videos**
- **Chats y notificaciones**

## Instalación y ejecución

### Backend
1. Instala dependencias:
   ```bash
   cd Backend
   npm install
   ```
2. Configura las variables de entorno (`.env`) y la base de datos MySQL (ver `config/create.sql`).
3. Inicia el servidor:
   ```bash
   npm run dev
   ```

### Frontend
1. Instala dependencias:
   ```bash
   cd Client
   npm install
   ```
2. Inicia la app con Expo:
   ```bash
   npm start
   ```

## Stack tecnológico
- **Backend:** Node.js, Express, MySQL, JWT, Multer, FileUpload
- **Frontend:** React Native, Expo, Zustand, React Navigation, Lottie

## Modelo de base de datos (resumen)
- **users**: usuarios registrados
- **posts**: publicaciones (texto, imagen, video)
- **comentarios**: comentarios en posts
- **likes**: likes en posts

## Contribuciones
¡Las contribuciones son bienvenidas! Abre un issue o pull request para sugerencias o mejoras.

## Licencia
Este proyecto está bajo la licencia ISC. 