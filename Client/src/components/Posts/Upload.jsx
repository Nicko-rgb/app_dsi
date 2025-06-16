import React from 'react'
import { View, Modal, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import { styles } from './Style'

const Upload = ({ visible, onClose }) => {

    return (
        <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose}>
            <ScrollView contentContainerStyle={styles.upload} >
                <View style={styles.upload_center} >
                    <TextInput
                        style={styles.textarea_upload}
                        multiline={true}
                        numberOfLines={5}
                        placeholder="Escribe tu publicación..."
                        textAlignVertical="top"
                    />
                </View>
            </ScrollView>
        </Modal>
    )
}

export default Upload