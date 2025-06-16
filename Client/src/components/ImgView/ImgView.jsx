// components/ImgView/ImgView.js
import React from 'react';
import { Modal, TouchableOpacity, Text, Image } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import closex from '../../assets/icons/closex.png'

const ImgView = ({ visible, onClose, imageUrl }) => {
    const images = typeof imageUrl === 'string'
        ? [{ url: imageUrl }]
        : [{ props: { source: imageUrl } }];

    return (
        <Modal visible={visible} transparent={true} animationType='fade' >
            <ImageViewer
                imageUrls={images}
                enableSwipeDown
                onSwipeDown={onClose}
                renderIndicator={() => null}
                // backgroundColor='white'
                renderHeader={() => (
                    <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: 20, right: 20, zIndex: 1, padding: 7}}>
                        {/* <Text style={{ color: 'white', fontSize: 18 }}>Cerrar</Text> */}
                        <Image style={{ width: 20, height: 20, tintColor: 'white' }} source={closex} />
                    </TouchableOpacity>
                )}
            />
        </Modal>
    );
};

export default ImgView;
