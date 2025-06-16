import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import ConfigStylo from '../../utils/config.style';

const Docentes = () => {
    const docentes = [
        {
            id: 1,
            name: 'Jhon Saboya',
            especialidade: 'Ing. en Sistemas',
            foto: '', // Puedes poner aquí una URL o una imagen local
            telefone: '987 123 769',
            email: 'jhonsab01@gmail.com',
        },
        {
            id: 2,
            name: 'Christian Dustin',
            especialidade: 'Ing. en Sistemas',
            foto: '',
            telefone: '987 123 7698',
            email: 'christian@hotmail.com',
        },
        {
            id: 3,
            name: 'Ruber Torres Arevalo',
            especialidade: 'Ing. en Sistemas',
            foto: '',
            telefone: '987 123 768',
            email: 'ruberta@gmail.com',
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Docentes</Text>
            <Text style={styles.txt}>
                Conoce a los docentes calificados del área académica de Desarrollo de Sistemas. Profesionales con experiencia en diversas especialidades, comprometidos con la formación integral de los estudiantes.
            </Text>
            {docentes.map((docente) => (
                <View key={docente.id} style={styles.card}>
                    {docente.foto ? (
                        <Image source={{ uri: docente.foto }} style={styles.image} />
                    ) : (
                        <View style={styles.imagePlaceholder}>
                            <Text style={styles.imageText}>Foto</Text>
                        </View>
                    )}
                    <View style={styles.info}>
                        <Text style={styles.name}>{docente.name}</Text>
                        <Text style={styles.specialty}>{docente.especialidade}</Text>
                        <Text style={styles.label}>Teléfono:</Text>
                        <Text style={styles.text}>{docente.telefone}</Text>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.text}>{docente.email}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 100,
    },
    title: {
        fontSize: 22,
        fontWeight: 800,
        marginBottom: 10,
        color: '#007AFF',
        margin: 0,
        textAlign: 'center'
    },
    txt: {
        fontSize: 15,
        color: '#555',
        lineHeight: 24,
        marginBottom: 20,
        textAlign: 'justify',
        borderLeftWidth: 2,
        borderColor: '#007AFF',
        paddingLeft: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#F0F4F8',
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    imagePlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#D0D0D0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText: {
        color: '#888',
        fontSize: 12,
    },
    info: {
        marginLeft: 12,
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    specialty: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },
    label: {
        fontSize: 12,
        color: '#007AFF',
        marginTop: 4,
    },
    text: {
        fontSize: 14,
        color: '#333',
    },
});

export default Docentes;