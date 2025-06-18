import React from 'react';
import { FlatList } from 'react-native';
import ChatItem from './ChatItem';
import chats from '../../utils/dummyChats';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {
  const navigation = useNavigation();

  const handleClicChat = (item) => {
    navigation.navigate('ChatRoom', { chat: item });
  };

  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const lastMsg = item.messages[item.messages.length - 1];
        const isMine = lastMsg?.from === 'me';
        const previewText = isMine ? `Tú: ${lastMsg.text}` : lastMsg.text;
        const previewTime = item.time; // Puedes reemplazar por lastMsg.time si lo tienes

        return (
          <ChatItem
            name={item.name}
            lastMessage={previewText}
            time={previewTime}
            onPress={() => handleClicChat(item)}
          />
        );
      }}
    />
  );
};

export default ChatList;
