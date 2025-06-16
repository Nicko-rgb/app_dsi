import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
const Chats = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Chats</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar tus chats..."
                />
            </View>
            <Text style={styles.description}>
                Aquí podrás ver toda tu lista de chats.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        fontWeight: 800,
        marginBottom: 10,
        color: '#007AFF',
        margin: 0,
    },
});

export default Chats;