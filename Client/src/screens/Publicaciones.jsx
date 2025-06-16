import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import PostCard from '../components/Posts/PostCard'
import { styles } from '../components/Posts/Style';
import ico1 from '../assets/icons/img.png';
import { useAuth } from '../context/AuthContext';
import useStorePost from '../components/Posts/useStorePost';

import Upload from '../components/Posts/Upload';

const Publicaciones = () => {
    const { isAuthenticated } = useAuth();
    const { visibleUpload, handleVisibleUpload } = useStorePost();

    return (
        <ScrollView style={styles.container} >
            <Text style={styles.title}>Posts</Text>
            {isAuthenticated && (
                <TouchableOpacity style={styles.btn_upload} onPress={() => handleVisibleUpload()} activeOpacity={.6} >
                    <Text style={styles.txt_upload} >Comparte algo nuevo...</Text>
                    <Image source={ico1} style={styles.ico_upload} />
                </TouchableOpacity>
            )}
            <PostCard post={'https://lf-cdn.trae.ai/obj/trae-ai-us/og.jpeg'} />
            <PostCard post={'https://www.marketing-empresas.com/wp-content/uploads/2018/04/MERKAWEBS-Dise%C3%B1o-grafico.jpg'} />
            <PostCard post={'https://res.cloudinary.com/dq2ug36ri/image/upload/fotooo1_zbezsr.jpg'} />
            <PostCard post={'https://blog.manzanaverde.la/wp-content/uploads/2022/07/Frutas-que-puedes-comer-en-invierno.png'} />

            <Upload visible={visibleUpload} onClose={() => handleVisibleUpload(false)} />
        </ScrollView>
    )
}

export default Publicaciones