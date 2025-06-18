import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './components/Posts/Style';

import useStorePost from './components/Posts/useStorePost';
import Header from './components/Header';
import UploadText from './components/Posts/UploadText';
import UploadFile from './components/Posts/UploadFile';

const Upload = () => {

    const { visibleTypeUpload } = useStorePost();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.upload}
        >
            <Header titulo={'Crear Publicación'} />
            <View style={styles.content} >
                {visibleTypeUpload === 'text' ? <UploadText /> : <UploadFile />}
            </View>
        </KeyboardAvoidingView>
    );
};

export default Upload;
