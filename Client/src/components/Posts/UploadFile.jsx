import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Video } from 'expo-av';
import useStorePost from './useStorePost';
import { styles } from './Style';
import icoText from '../../assets/icons/leter_aa.png';

const UploadFile = () => {
    const [media, setMedia] = useState([]);
    const [permission, requestPermission] = MediaLibrary.usePermissions();
    const { selectedMedia, setSelectedMedia, setVisibleTypeUpload } = useStorePost();

    useEffect(() => {
        (async () => {
            if (!permission || permission.status !== 'granted') {
                const { status } = await MediaLibrary.requestPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert('Permiso denegado', 'Necesitamos acceso a tu galería para subir archivos.');
                    return;
                }
            }

            const assets = await MediaLibrary.getAssetsAsync({
                mediaType: ['photo', 'video'],
                sortBy: ['creationTime'],
                first: 50,
            });

            setMedia(assets.assets);
        })();
    }, [permission]);

    const handleSelect = (item) => {
        setSelectedMedia(item);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleSelect(item)} style={{ margin: 5 }}>
            <Image
                source={{ uri: item.uri }}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    backgroundColor: '#ccc',
                }}
            />
            <Text style={{ fontSize: 10, textAlign: 'center' }}>
                {item.mediaType === 'video' ? '🎥 Video' : '🖼️ Foto'}
            </Text>
        </TouchableOpacity>
    );

    const renderPreview = () => {
        if (!selectedMedia) return null;

        return (
            <View style={{ marginVertical: 10, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Vista previa</Text>
                {selectedMedia.mediaType === 'video' ? (
                    <Video
                        source={{ uri: selectedMedia.uri }}
                        style={{ width: Dimensions.get('window').width - 40, height: 250 }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                    />
                ) : (
                    <Image
                        source={{ uri: selectedMedia.uri }}
                        style={{ width: Dimensions.get('window').width - 40, height: 250, borderRadius: 10 }}
                    />
                )}
            </View>
        );
    };

    return (
        <View style={styles.upload_center}>
            <Text style={styles.title_upload}>Sube tu publicación con fotos o video</Text>

            <TouchableOpacity style={styles.btn_upload} onPress={requestPermission}>
                <Text style={styles.note}>Volver a pedir permiso si es necesario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_upload} onPress={() => setVisibleTypeUpload('text')}>
                <Image style={styles.ico_upload} source={icoText} />
            </TouchableOpacity>

            {renderPreview()}

            <FlatList
                data={media}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={3}
                contentContainerStyle={{ marginTop: 10 }}
            />
        </View>
    );
};

export default UploadFile;
