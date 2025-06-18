import { StyleSheet } from 'react-native';
import ConfigStylo from '../../utils/config.style';

const { colors } = ConfigStylo();

export const styles = StyleSheet.create({


    // ESTILOS PARA EL CHAT
   container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    messagesContainer: {
        flexGrow: 1,
        // justifyContent: 'flex-end',
        padding: 10,
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
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