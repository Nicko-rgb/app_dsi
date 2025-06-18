import { StyleSheet } from 'react-native';
import ConfigStylo from '../../utils/config.style';

const { colors } = ConfigStylo();

export const styles = StyleSheet.create({


    // ESTILOS PARA EL CHAT
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    keyboardContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    messagesContainer: {
        padding: 15,
        paddingBottom: 20,
        flexGrow: 1,
    },
    messageBubble: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        maxWidth: '75%',
    },
    myMessage: {
        backgroundColor: '#DCF8C5',
        alignSelf: 'flex-end',
    },
    otherMessage: {
        backgroundColor: '#E5E5EA',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
    timeText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'right',
        marginTop: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
// *******************************************************************
    // ESTILOS DEL ARCHIVO ChatItem
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    content: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        color: '#888',
    },
    time: {
        color: '#888',
        fontSize: 12,
    },

})