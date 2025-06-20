import React, { useRef, useEffect, useState } from 'react'; // agrega useState
import { View, Text, TouchableOpacity, Image, TextInput, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Style';
import img_add from '../../assets/icons/img_add.png';
import paleta from '../../assets/icons/paleta_colors.png';
import urlApp from '../../utils/urlApp';
import { useAuth } from '../../context/AuthContext'

import useStorePost from './useStorePost';
const UploadText = () => {
    const { apiUrl } = urlApp();
    const { user } = useAuth();

    const { texto, setTexto, selectedColor, showPalette, togglePalette, colorsPalette, setVisibleTypeUpload, handlePostearTexto } = useStorePost();

    // Asegura que selectedColor.value sea siempre un array válido para LinearGradient
    const safeColors = Array.isArray(selectedColor.value)
        ? selectedColor.value
        : [selectedColor.value, selectedColor.value];

    // Animación para deslizar la paleta desde la derecha
    const slideAnim = useRef(new Animated.Value(200)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: showPalette ? 0 : 200,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [showPalette]);

    const handlePost = () => {
        handlePostearTexto(
            user.id_user,
            () => alert('Post registrado con éxito'),
            (msg) => alert(msg)
        );
    };


    return (
        <View style={styles.upload_center}>
            <Text style={styles.title_upload}>Escribe tu publicación</Text>
            <LinearGradient colors={safeColors} style={styles.gradientBackground}>
                <TextInput
                    value={texto}
                    onChangeText={setTexto}
                    style={[styles.textarea_upload, { backgroundColor: 'transparent' }]}
                    multiline
                    numberOfLines={6}
                    placeholder="Escribe tu publicación..."
                    textAlignVertical="top"
                    placeholderTextColor="#333"
                />
            </LinearGradient>
            <View style={styles.barra_opcion_text}>
                <TouchableOpacity style={[styles.btn_add]} onPress={() => setVisibleTypeUpload('file')}>
                    <Image style={[styles.ico_add, { tintColor: 'dodgerblue' }]} source={img_add} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_add} onPress={togglePalette}>
                    <Image style={styles.ico_add} source={paleta} />
                </TouchableOpacity>

                {/* Paleta animada */}
                {showPalette && (
                    <Animated.View
                        style={[
                            {
                                transform: [{ translateX: slideAnim }],
                                position: 'absolute',
                                top: -50,
                                right: 15,
                                flexDirection: 'row',
                            }
                        ]}
                    >
                        {colorsPalette.map((item, index) => {
                            const current = Array.isArray(item.value)
                                ? item.value
                                : [item.value, item.value];
                            const isSelected =
                                selectedColor.value.join() === current.join();

                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 20,
                                        marginHorizontal: 4,
                                        borderWidth: isSelected ? 2 : 0,
                                        borderColor: '#000',
                                        overflow: 'hidden',
                                        elevation: 2,
                                    }}
                                    onPress={() => setSelectedColor(item)}
                                >
                                    <LinearGradient
                                        colors={current}
                                        style={{ flex: 1, borderRadius: 20 }}
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </Animated.View>
                )}
            </View>

            <TouchableOpacity style={styles.btn_postear} activeOpacity={.8} onPress={handlePost}>
                <Text style={styles.txt_postear}>Postear</Text>
            </TouchableOpacity>

        </View>
    )
}

export default UploadText;