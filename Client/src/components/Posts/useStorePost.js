// import { create } from 'zustand';

// const useStorePost = create((set) => ({

//     // Estado para manejar la visibilidad del tipo de publicación que se va a subir
//     visibleTypeUpload: 'text', // 'text' o 'file'
//     // Función para alternar entre los tipos de subida
//     handleVisibleTypeUpload: () =>
//         set((state) => ({
//             visibleTypeUpload: state.visibleTypeUpload === 'text' ? 'file' : 'text',
//         })),
//     // Función para establecer un tipo de subida específico
//     setVisibleTypeUpload: (value) => set({ visibleTypeUpload: value }),

//     // Estado de paleta de colores
//     // Se usa para seleccionar el color del fondo de la publicación
//     selectedColor: { type: 'gradient', value: ['#ffffff', '#ffffff'] },
//     setSelectedColor: (color) => set({ selectedColor: color }),

//     showPalette: false,
//     togglePalette: () =>
//         set((state) => ({ showPalette: !state.showPalette })),

//     colorsPalette: [
//         { type: 'gradient', value: ['#ffffff', '#ffffff'] }, // blanco sólido
//         { type: 'gradient', value: ['#f9f5f0', '#f9f5f0'] },
//         { type: 'gradient', value: ['#e0f7fa', '#e0f7fa'] },
//         { type: 'gradient', value: ['#ffe0b2', '#ffe0b2'] },
//         { type: 'gradient', value: ['#f8bbd0', '#f8bbd0'] },
//         { type: 'gradient', value: ['#ff9a9e', '#fad0c4'] },
//         { type: 'gradient', value: ['#a1c4fd', '#c2e9fb'] },
//     ],


//     selectedMedia: null,
//     setSelectedMedia: (media) => set({ selectedMedia: media }),


// }));

// export default useStorePost;


import { create } from 'zustand';
import urlApp from '../../utils/urlApp';

const { apiUrl } = urlApp();

const useStorePost = create((set, get) => ({
    texto: '',
    setTexto: (txt) => set({ texto: txt }),

    selectedColor: { name: 'Default', value: ['#ffffff', '#ffffff'] },
    setSelectedColor: (color) => set({ selectedColor: color }),

    showPalette: false,
    togglePalette: () => set((state) => ({ showPalette: !state.showPalette })),

    colorsPalette: [
        { name: 'Blue', value: ['#4facfe', '#00f2fe'] },
        { name: 'Pink', value: ['#f77062', '#fe5196'] },
        // agrega más combinaciones
    ],

    visibleTypeUpload: 'text',
    setVisibleTypeUpload: (type) => set({ visibleTypeUpload: type }),

    handlePostearTexto: async (userId, onSuccess, onError) => {
        const { texto, selectedColor } = get();
    
        if (!texto.trim()) {
            onError?.('El texto no puede estar vacío');
            return;
        }
    
        const safeColors = Array.isArray(selectedColor.value)
            ? selectedColor.value
            : [selectedColor.value, selectedColor.value];
    
        try {
            const response = await fetch(`${apiUrl}/api/posts/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_user: userId,
                    tipo: 'texto',
                    texto,
                    fondos_text: safeColors
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                set({ texto: '' });
                onSuccess?.();
            } else {
                console.error(data);
                onError?.('Error al registrar post');
            }
        } catch (error) {
            console.error(error);
            onError?.('Error de red');
        }
    },

    handlePostearArchivo: async (userId, file, descripcion, mediaType, onSuccess, onError) => {
        if (!file) {
            onError?.('Debes seleccionar un archivo');
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append('id_user', userId);
            formData.append('tipo', mediaType); // 'imagen' o 'video'
            formData.append('descripcion', descripcion || '');
            formData.append('file', file); // debe ser un objeto tipo File
    
            const response = await fetch(`${apiUrl}/api/posts/create`, {
                method: 'POST',
                body: formData
            });
    
            const data = await response.json();
    
            if (response.ok) {
                onSuccess?.();
            } else {
                console.error(data);
                onError?.('Error al subir archivo');
            }
        } catch (error) {
            console.error(error);
            onError?.('Error de red');
        }
    }
    
    
}));

export default useStorePost;
