import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = ({ message }) => {
    const animation = useRef(null);

    useEffect(() => {
        animation.current?.play();
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                ref={animation}
                source={require('../../assets/animation/loading2.json')}
                style={styles.lottie}
                loop
                autoPlay
            />
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        padding: 20,
    },
    lottie: {
        width: 200,
        height: 200,
    },
    message: {
        fontSize: 18,
        color: '#4B5563',
        fontWeight: '500',
        marginTop: -70,
    },
});

export default Loading;
