import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator,} from 'react-native';
import Video from 'react-native-video';
import ImgView from '../ImgView/ImgView';
import imgPerfil from '../../assets/perfil.jpg';
import noLiked from '../../assets/icons/not-like.png';
import liked from '../../assets/icons/liked.png';
import icoComent from '../../assets/icons/chat.png';
import { styles } from './Style';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const MAX_POST_HEIGHT = SCREEN_HEIGHT * 0.8;
const MIN_POST_HEIGHT = SCREEN_HEIGHT * 0.1;

const PostCard = ({ isPerfil, data, post }) => {
    const [openViewer, setOpenViewer] = useState(false);
    const [aspectRatio, setAspectRatio] = useState(1);
    const [loadingImage, setLoadingImage] = useState(true);

    // Ejemplo URL (debería venir de data.url)
    // const post = 'https://i.pinimg.com/originals/a3/b6/ed/a3b6ed31045cdebea98681403b7614ee.jpg';
    const isVideo = post?.endsWith('.mp4') || data?.type === 'video';
    const hasPost = !!post;

    useEffect(() => {
        if (!isVideo && hasPost) {
            Image.getSize(
                post,
                (width, height) => {
                    setAspectRatio(width / height);
                    setLoadingImage(false);
                },
                (error) => {
                    console.warn('No se pudo obtener tamaño de imagen:', error);
                    setAspectRatio(1);
                    setLoadingImage(false);
                }
            );
        }
    }, [post]);

    return (
        <View style={styles.card}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={imgPerfil} style={styles.imgPerfil} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>Nixon Mancilla Leon</Text>
                    <Text style={styles.date}>12:40pm 12/04/2025</Text>
                </View>
            </View>

            {/* Cuerpo del Post */}
            <Text style={styles.descripcion}>Recuerda comer frutas y verduras...</Text>
            {hasPost && (
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.postContainer}
                    onPress={() => !isVideo && setOpenViewer(true)}
                >
                    {isVideo ? (
                        <Video
                            source={{ uri: post }}
                            style={styles.media}
                            resizeMode="contain"
                            paused={true}
                        />
                    ) : loadingImage ? (
                        <View style={[styles.loadingContainer, { height: MIN_POST_HEIGHT }]}>
                            <ActivityIndicator size="large" color="#999" />
                        </View>
                    ) : (
                        <Image
                            source={{ uri: post }}
                            style={[
                                styles.media,
                                {
                                    aspectRatio,
                                    minHeight: MIN_POST_HEIGHT,
                                    maxHeight: MAX_POST_HEIGHT,
                                },
                            ]}
                            resizeMode="cover"
                        />
                    )}
                </TouchableOpacity>
            )}

            {/* Pie de posts */}
            <View style={styles.footer} >
                <TouchableOpacity style={styles.btnPie} >
                    <Image source={liked} style={[styles.icoPie, {tintColor: 'red'}]} />
                    <Text style={styles.count} >7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPie} >
                    <Image source={icoComent} style={styles.icoPie} />
                    <Text style={styles.count} >12</Text>
                </TouchableOpacity>
            </View>

            {/* Visor ampliado */}
            {!isVideo && hasPost && (
                <ImgView
                    visible={openViewer}
                    onClose={() => setOpenViewer(false)}
                    imageUrl={post}
                />
            )}
        </View>
    );
};


export default PostCard;
