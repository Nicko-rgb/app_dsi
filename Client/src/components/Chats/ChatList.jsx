// components/ChatList.jsx
import React from 'react';
import { FlatList } from 'react-native';
import ChatItem from './ChatItem';
import chats from '../../utils/dummyChats';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importa el hook

const ChatList = () => { 
    const navigation = useNavigation();
    const handleClicChat = (item) =>{
        navigation.navigate('ChatRoom', { chat: item.id });
    }
    return (
        <FlatList
            data={chats}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ChatItem
                    name={item.name}
                    lastMessage={item.lastMessage}
                    time={item.time}
                    onPress={
                        () =>handleClicChat(item)
                    }
                />
            )}
        />
    );
};

export default ChatList;
