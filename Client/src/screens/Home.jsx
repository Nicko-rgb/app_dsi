import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Code from '../components/Home/Code';

const Home = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.suiza}>IESTP Suiza</Text>
            <Text style={styles.carrera}>DESARROLLO DE SISTEMAS DE INFORMACIÓN</Text>
            <Text style={styles.description}>
                Publica fotos y vídeos, conéctate
                con los estudiantes, y aprende sobre el instituto.
                Mantente al día con las últimas noticias,
                anuncios y eventos.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 15,
        marginBottom: 80
    },
    suiza: {
        color: ' #333',
        fontSize: 16
    },
    carrera: {
        fontSize: 25,
        fontWeight: '800',
        marginBottom: 20,
        color: '#007AFF',
        textAlign: 'center',
        margin: 0,
        textShadowColor: '#5498FFFF',
        textShadowRadius: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#666',
        lineHeight: 24,
    }
});

export default Home;