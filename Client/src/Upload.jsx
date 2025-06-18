import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './components/Posts/Style';

import useStorePost from './components/Posts/useStorePost';
import Header from './components/Header';
import UploadText from './components/Posts/UploadText';
import UploadFile from './components/Posts/UploadFile';

const Upload = () => {

    const { visibleTypeUpload } = useStorePost();

    return (
        <View style={styles.upload}>
            <Header titulo={'Crear Publicación'} />
            <ScrollView contentContainerStyle={styles.content} >
                {visibleTypeUpload === 'text' ? <UploadText /> : <UploadFile />}
            </ScrollView>
        </View>
    );
};

export default Upload;
