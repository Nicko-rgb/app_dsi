// components/ChatItem.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './Style';

const ChatItem = ({ name, lastMessage, time, onPress }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.message}>{lastMessage}</Text>
            </View>
            <Text style={styles.time}>{time}</Text>
        </TouchableOpacity>
    );
};

export default ChatItem;