import { StyleSheet} from 'react-native';
import ConfigStylo from '../../utils/config.style';

const { colors } = ConfigStylo();

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    upload_center: {
        backgroundColor: colors.colorHover,
        width: '100%'
    },
    textarea_upload: {
        minHeight: 100,
        
    },
    // ====================================================================================
    // ESTYLOS PARA LA CARD DE PUBLICACIONES
    card: {
        padding: 5,
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