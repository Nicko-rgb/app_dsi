import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; // Importa TouchableOpacity
import { useNavigation, useRoute } from '@react-navigation/native'; // Importa el hook
import userIco from '../assets/icons/user.png'
import noti from '../assets/icons/notification.png'
import back from '../assets/icons/back.png'
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const navigation = useNavigation(); // Hook para navegar
    const route = useRoute();
    const [titleName, setTitleName] = useState('');
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (route.name === 'Perfil') {
            setTitleName('Perfil');
        } else if (route.name === 'RegistroLogin') {
            setTitleName(`D'SYSTEM`);
        } else {
            setTitleName(`D'SYSTEM`);
        }
    }, [route.name]);

    return (
        <View style={styles.footer}>
            <View style={styles.left}>
                {route.name !== 'Navegador' && (
                    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Navegador')}>
                        <Image source={back} style={styles.backIco} />
                    </TouchableOpacity>
                )}
                <Text style={styles.logoText}>{titleName}</Text>
            </View>
            {isAuthenticated ? (
                <View style={styles.right}>
                    <View style={styles.ico}>
                        <Image style={styles.img} source={noti} />
                    </View>
                    <TouchableOpacity style={styles.ico} onPress={() => navigation.navigate('Perfil')}>
                        <Image style={styles.img} source={userIco} />
                    </TouchableOpacity>
                </View>
            ) : (
                route.name !== 'RegistroLogin' ? (
                    <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('RegistroLogin')}>
                        <Text style={styles.textLogin}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                ) : null
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 100,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: 'white',
        shadowColor: '#000',
        elevation: 5,
        zIndex: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        // borderWidth: 1,
        width: 40,
        marginLeft: -10
    },
    backIco: {
        width: 22,
        height: 25,
        tintColor: '#333',
        objectFit: 'contain'
    },
    logoText: {
        fontFamily: '',
        fontWeight: 800,
        fontSize: 22,
        color: '#007AFF',
    },
    right: {
        // borderWidth: 1,
        flexDirection: 'row',
        gap: 10
    },
    ico: {
        // borderWidth: 1,
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'rgba(107, 147, 255, 0.11)',
    },
    img: {
        width: 28,
        height: 28,
        tintColor: '#007AFF',
    },
    btnLogin: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textLogin: {
        color: 'white',
        fontWeight: 600,
        fontSize: 12
    }
})

export default Header;