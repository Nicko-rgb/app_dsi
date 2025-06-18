import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import PostCard from '../components/Posts/PostCard'
import { styles } from '../components/Posts/Style';
import ico1 from '../assets/icons/img.png';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const Publicaciones = () => {
    const { isAuthenticated } = useAuth();

    const navigation = useNavigation();

    const handleNavUpload = () => {
        navigation.navigate('Upload');
    }

    return (
        <ScrollView style={styles.container} >
            <Text style={styles.title}>Posts</Text>
            {isAuthenticated && (
                <TouchableOpacity style={styles.btn_upload_open} onPress={handleNavUpload} activeOpacity={.6} >
                    <Text style={styles.txt_upload_open} >Comparte algo nuevo...</Text>
                    <Image source={ico1} style={styles.ico_upload_open} />
                </TouchableOpacity>
            )}
            <PostCard post={'http://192.168.220.190:5051/media/posts/post.png'} />
            <PostCard post={'http://192.168.220.190:5051/media/posts/img2.png'} />
            <PostCard post={'https://res.cloudinary.com/dq2ug36ri/image/upload/fotooo1_zbezsr.jpg'} />
            <PostCard post={'https://blog.manzanaverde.la/wp-content/uploads/2022/07/Frutas-que-puedes-comer-en-invierno.png'} />
        </ScrollView>
    )
}

export default Publicaciones