import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ChatList from '../components/Chats/ChatList';

const Chats = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Chats</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar tus chats..."
                />
            </View>
            <ChatList navigation={navigation} />
        </View>
    );
};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 3,
        marginBottom: 15,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#007AFF',
    },
});

export default Chats;
