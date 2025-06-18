import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import ConfigStylo from '../../utils/config.style';

const { colors } = ConfigStylo();

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        marginBottom: 85
    },
    // ESTILOS PARA EL HEADER DE PUBLICACIONES
    title: {
        fontSize: 22,
        fontWeight: 800,
        marginBottom: 10,
        color: colors.color1,
        margin: 0,
        textAlign: 'center',
    },
    btn_upload_open: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.colorHover,
        marginHorizontal: 10,
        marginBottom: 20,
        padding: 8,
        borderRadius: 10
    },
    txt_upload_open: {
        fontSize: 16,
        fontWeight: 800,
        marginLeft: 10,
        color: colors.color1,
    },
    ico_upload_open: {
        width: 25,
        height: 25,
        tintColor: colors.color1,
    },
    // ====================================================================================
    // Contenedor principal para UploadText y UploadFile
    upload: {
        flex: 1, 
        // borderWidth: 2, 
        backgroundColor: '#f4f6fa',
        paddingTop: 60,
    },
    content: {
        padding: 20,
        flex: 1,
        // borderWidth: 2
    },

    // Estilo para centrar todo el contenido
    upload_center: {
        width: '100%',
        // borderWidth: 1,
        margin: 'auto',
        alignItems: 'center'
    },

    title_upload: {
        fontSize: 20,
        fontWeight: 800,
        color: colors.color1,
        marginBottom: 15,
    },

    // Fondo degradado con borde redondeado para texto
    gradientBackground: {
        width: '100%',
        borderRadius: 16,
        padding: 12,
        marginBottom: 5,
        minHeight: 150,
        shadowColor: '#aaa',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        borderWidth: .4,
        borderColor: colors.color1,
    },

    textarea_upload: {
        fontSize: 18,
        fontWeight: 700,
        color: '#1c1c1c',
        fontFamily: 'System',
        marginBottom: 25,
        // borderWidth: .4
    },

    // Botones para agregar o cambiar modo
    barra_opcion_text: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        gap: 10,
    },

    btn_add: {
        width: 44,
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#999',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },

    ico_add: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },

    btn_postear: {
        marginTop: 20,
        width: width * 0.6,
        height: 48,
        backgroundColor: colors.color1,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#007bff',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 3 },
    },

    txt_postear: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        letterSpacing: 0.5,
    },

    note: {
        color: '#444',
        fontSize: 14,
        fontWeight: '500',
    },

    ico_upload: {
        width: 20,
        height: 20,
        marginLeft: 8,
        tintColor: '#007bff',
    },

    // Preview de imagen/video
    preview_container: {
        marginVertical: 10,
        alignItems: 'center',
    },

    preview_image: {
        width: width - 40,
        height: 250,
        borderRadius: 12,
        resizeMode: 'cover',
    },

    preview_video: {
        width: width - 40,
        height: 250,
    },
    // ====================================================================================
    // ESTYLOS PARA LA CARD DE PUBLICACIONES
    card: {
        padding: 5,
        // paddingBottom: 80,
        backgroundColor: 'white',
        borderBottomWidth: 8,
        borderBottomColor: '#e0e0e0',
        borderTopColor: '#e0e0e0',
        borderTopWidth: 1,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    imgPerfil: {
        width: 45,
        height: 45,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    userInfo: {
        marginLeft: 10,
    },
    name: {
        fontWeight: 600,
        fontSize: 16,
    },
    date: {
        fontSize: 13,
        color: 'gray',
    },
    descripcion: {
        fontSize: 15,
        fontWeight: 500,
        // color: 'gray',
        marginBottom: 5,
        paddingLeft: 5
    },
    postContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
    },
    media: {
        width: '100%',
        minWidth: '100%',
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        width: '100%',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        // paddingBottom: 80,
        // borderWidth: 1
    },
    btnPie: {
        alignItems: 'center',
        // borderWidth: 1,
        width: 70
    },
    icoPie: {
        width: 25,
        height: 25,
    },
    count: {
        fontSize: 14,
        fontWeight: 800,
    },
});