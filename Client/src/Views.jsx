import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, Animated, BackHandler } from 'react-native';

// Importa tus pantallas
import Home from './screens/Home';
import Publicaciones from './screens/Publicaciones';
import Dsi from './screens/Dsi';
import News from './screens/News';
import Chats from './screens/Chats';
import Header from './components/Header'

// Importa tus íconos
import homeIcon from './assets/icons/home.png';
import globoIcon from './assets/icons/globe.png';
import imgIcon from './assets/icons/img.png';
import graduateIcon from './assets/icons/graduate.png';
import chatIcon from './assets/icons/chat.png';

const { width } = Dimensions.get('window');

const tabs = [
    { name: 'News', img: globoIcon, screen: <News /> },
    { name: 'Chats', img: chatIcon, screen: <Chats /> },
    { name: 'Home', img: homeIcon, screen: <Home /> },
    { name: 'Posts', img: imgIcon, screen: <Publicaciones /> },
    { name: 'DSI', img: graduateIcon, screen: <Dsi /> },
];

const Navegador = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const translateX = useRef(new Animated.Value(0)).current;
    const prevTab = useRef('Home'); // Para saber desde qué tab vienes

    useEffect(() => {
        const backAction = () => {
            if (activeTab !== 'Home') {
                setActiveTab('Home');
                return true; // Evitar salir de la app
            }
            return false; // Permitir salir
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [activeTab]);

    const renderScreen = () => {
        const tab = tabs.find(t => t.name === activeTab);
        return tab ? tab.screen : null;
    };

    const handleTabPress = (tabName) => {
        if (tabName === activeTab) return;

        const direction = tabs.findIndex(t => t.name === tabName) > tabs.findIndex(t => t.name === activeTab) ? 1 : -1;

        translateX.setValue(direction * width);

        Animated.timing(translateX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();

        setActiveTab(tabName);
        prevTab.current = activeTab;
    };

    return (
        <View style={styles.container}>
            <Header />
            {/* Pantalla activa */}
            <Animated.View 
                style={[
                    styles.screenContainer, 
                    { transform: [{ translateX }] }
                ]}
            >
                {renderScreen()}
            </Animated.View>

            {/* Barra de navegación */}
            <View style={styles.tabBar}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.name;
                    return (
                        <TouchableOpacity 
                            key={tab.name} 
                            style={styles.tabItem} 
                            onPress={() => handleTabPress(tab.name)}
                        >
                            <View style={[
                                styles.iconContainer,
                                isActive && styles.activeIconContainer
                            ]}>
                                <Image
                                    source={tab.img}
                                    style={[
                                        styles.icon,
                                        { tintColor: isActive ? '#007AFF' : 'gray' }
                                    ]}
                                    resizeMode="contain"
                                />
                                <Text style={[
                                    styles.tabText,
                                    { color: isActive ? '#007AFF' : 'gray', fontWeight: 800 }
                                ]}>
                                    {tab.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    screenContainer: {
        flex: 1,
        // borderWidth: 3,
        marginTop: 100
    },
    tabBar: {
        height: 80,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: 'white',
        elevation: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'hidden', 
    },
    tabItem: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        // borderWidth: 1,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeIconContainer: {
        flex: 1,
        borderRadius: 100,
        top: -10,
        paddingTop: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    tabText: {
        fontSize: 12,
        // marginTop: 4,
        fontWeight: '600',
    },
});

export default Navegador;
