import { create } from 'zustand';

const useStorePost = create((set) => ({

    // Estado para manejar la visibilidad del tipo de publicación que se va a subir
    visibleTypeUpload: 'text', // 'text' o 'file'
    // Función para alternar entre los tipos de subida
    handleVisibleTypeUpload: () =>
        set((state) => ({
            visibleTypeUpload: state.visibleTypeUpload === 'text' ? 'file' : 'text',
        })),
    // Función para establecer un tipo de subida específico
    setVisibleTypeUpload: (value) => set({ visibleTypeUpload: value }),

    // Estado de paleta de colores
    // Se usa para seleccionar el color del fondo de la publicación
    selectedColor: { type: 'gradient', value: ['#ffffff', '#ffffff'] },
    setSelectedColor: (color) => set({ selectedColor: color }),

    showPalette: false,
    togglePalette: () =>
        set((state) => ({ showPalette: !state.showPalette })),

    colorsPalette: [
        { type: 'gradient', value: ['#ffffff', '#ffffff'] }, // blanco sólido
        { type: 'gradient', value: ['#f9f5f0', '#f9f5f0'] },
        { type: 'gradient', value: ['#e0f7fa', '#e0f7fa'] },
        { type: 'gradient', value: ['#ffe0b2', '#ffe0b2'] },
        { type: 'gradient', value: ['#f8bbd0', '#f8bbd0'] },
        { type: 'gradient', value: ['#ff9a9e', '#fad0c4'] },
        { type: 'gradient', value: ['#a1c4fd', '#c2e9fb'] },
    ],


    selectedMedia: null,
    setSelectedMedia: (media) => set({ selectedMedia: media }),


}));

export default useStorePost;
