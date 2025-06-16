import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import userIco from '../../assets/icons/user.png'

const CardNew = ({ data }) => {
    const handlePress = () => {
        Linking.openURL(data.url);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            {data.cover_image && (
                <Image 
                    source={{ uri: data.cover_image }}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <View style={styles.content}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description} numberOfLines={3}>
                    {data.description}
                </Text>
            </View>
            <View style={styles.info}>
                <Image source={{uri: data.user.profile_image}} resizeMode='cover' style={styles.profile} />
                <Text style={styles.nameUser}>{data.user.name}</Text>
                <Text style={styles.fecha}>{formatDate(data.published_at)}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        boxShadow: '0 5 10 gray',
        overflow: 'hidden',
        elevation: 5,
        borderCurver: 10,
    },
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 0,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    info : {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        position: 'relative'
    },
    nameUser: {
        fontSize: 15,
        textTransform: 'capitalize',
        color: 'gray',
        fontWeight: 500
    },
    profile: {
        width: 35,
        height: 35,
        borderRadius: 100,
    },
    fecha: {
        fontSize: 14,
        fontWeight: 500,
        color: 'gray',
        position: 'absolute',
        right: 0
    }
});

export default CardNew;