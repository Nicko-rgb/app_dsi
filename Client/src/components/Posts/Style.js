import { StyleSheet, Dimensions } from 'react-native';
import ConfigStylo from '../../utils/config.style';
const { width } = Dimensions.get('window');

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
    btn_upload: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.colorHover,
        marginHorizontal: 10,
        marginBottom: 20,
        padding: 8,
        borderRadius: 10
    },
    txt_upload: {
        fontSize: 16,
        fontWeight: 800,
        marginLeft: 10,
        color: colors.color1,
    },
    ico_upload: {
        width: 25,
        height: 25,
        tintColor: colors.color1,
    },
    // ====================================================================================
    // ESTYLOS PARA EL MODAL UPLOAD PUBLIACIONES
    upload: {
        flex: 1,
        backgroundColor: 'white',
    },
    content:{
        flex: 1,
        marginTop: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    upload_center: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#f7f9fc',
    },
    title_upload: {
        fontSize: 20,
        fontWeight: '700',
        color: '#2b2b2b',
        marginBottom: 16,
        alignSelf: 'flex-start',
    },
    gradientBackground: {
        width: '100%',
        borderRadius: 16,
        padding: 12,
        marginBottom: 16,
        minHeight: 150,
        justifyContent: 'flex-start',
        elevation: 2,
        shadowColor: '#aaa',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    textarea_upload: {
        fontSize: 16,
        color: '#1c1c1e',
        fontFamily: 'System',
    },
    barra_opcion_text: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 30,
        gap: 10,
    },
    btn_add: {
        width: 42,
        height: 42,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#999',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    ico_add: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    btn_postear: {
        width: width * 0.6,
        height: 50,
        backgroundColor: '#007bff',
        borderRadius: 25,
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