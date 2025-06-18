import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Video } from 'expo-av';
import useStorePost from './useStorePost';
import { styles } from './Style';
import icoText from '../../assets/icons/leter_aa.png';

const UploadFile = () => {
    const [media, setMedia] = useState([]);
    const [permission, requestPermission] = MediaLibrary.usePermissions();
    const { selectedMedia, setSelectedMedia, setVisibleTypeUpload } = useStorePost();

    return (
        <View style={styles.upload_center}>
            <Text style={styles.title_upload}>Sube tu publicación con fotos o video</Text>
            <View style={styles.barra_opcion_text} >
            <TouchableOpacity style={styles.btn_add} onPress={() => setVisibleTypeUpload('text')}>
                <Image style={styles.ico_add} source={icoText} />
            </TouchableOpacity>

            {/* Vista de archivos del dispositivo de la galeria */}
            <FlatList></FlatList>
            </View>
        </View>
    );
};

export default UploadFile;
