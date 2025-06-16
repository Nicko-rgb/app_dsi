import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Pressable } from 'react-native';

const Acerca = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImagePress = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const LangTecn = [
        { name: 'Python', desc: 'Análisis de datos y machine learning', img: require('../../assets/icons/python.png') },
        { name: 'Java', desc: 'Desarrollo de aplicaciones empresariales', img: require('../../assets/icons/java.png') },
        { name: 'JavaScript', desc: 'Desarrollo web interactivo', img: require('../../assets/icons/js.png')  },
        { name: 'HTML y CSS', desc: 'Estructura y estilo web', img: require('../../assets/icons/html.png') },
        { name: 'React', desc: 'Interfaces de usuario modernas', img: require('../../assets/icons/react.png')  },
        { name: 'Node.js', desc: 'Desarrollo backend', img: require('../../assets/icons/node.png') },
        { name: 'Git', desc: 'Control de versiones', img: require('../../assets/icons/git.png')  },
        { name: 'Base de Datos', desc: 'Gestión de datos', img: require('../../assets/icons/db.png') },
    ]
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>DESARROLLO DE SISTEMAS DE INFORMACIÓN IESTP - SUIZA</Text>
                <Text style={styles.subtitle}>Profesional Técnico en Desarrollo de Sistemas de Información</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Descripción de la Carrera</Text>
                <Text style={styles.text}>
                    La carrera de Desarrollo de Sistemas de Información te prepara para diseñar, desarrollar y mantener sistemas informáticos que satisfagan las necesidades de las organizaciones. Aprenderás a programar en diversos lenguajes (Back-end & Front-end), gestionar bases de datos y administrar redes, aplicando metodologías ágiles y buenas prácticas de la industria.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Información Académica</Text>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>• Carrera Profesional Técnica de 3 años de estudio</Text>
                    <Text style={styles.infoText}>• 6 CICLOS ACADÉMICOS</Text>
                    <Text style={styles.infoText}>• 3 Certificaciones Modulares</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Lenguajes y Tecnologías</Text>
                <View style={styles.techGrid}>
                    {LangTecn.map((tech, index) => (
                        <View key={index} style={styles.techItem}>
                            <Image source={tech.img} style={{ width: 40, height: 40, marginBottom: 8, margin: 'auto' }} />
                            <Text style={styles.techName}>{tech.name}</Text>
                            <Text style={styles.techDesc}>{tech.desc}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Perfil del Egresado</Text>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>• Desarrolla aplicaciones web y móviles utilizando tecnologías actuales</Text>
                    <Text style={styles.infoText}>• Diseña y administra bases de datos relacionales y no relacional</Text>
                    <Text style={styles.infoText}>• Implementa soluciones de conectividad y seguridad en redes</Text>
                    <Text style={styles.infoText}>• Trabaja en equipo y se adapta a los cambios tecnológicos</Text>
                    <Text style={styles.infoText}>• Comunica efectivamente ideas y soluciones técnicas</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Campo Laboral</Text>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>• DESARROLLO DE SOFTWARE: Desarrollo de software para empresas de servicios de mantenimiento de sistemas informáticos, empresas de venta y representación de soluciones informáticas.</Text>
                    <Text style={styles.infoText}>• ADMINISTRACIÓN DE CENTROS DE CÓMPUTO: Administra centros de cómputo, redes de área local y extendida, y gestiona bases de datos relacional y no relacional.</Text>
                    <Text style={styles.infoText}>• EMPRESAS DE TECNOLOGÍA DE LA INFORMACIÓN: Trabaja en empresas que proveen servicios de tecnologías de la información, incluyendo desarrollo de software, consultoría y asesoramiento.</Text>
                    <Text style={styles.infoText}>• EMPRESAS DE SERVICIO DE MANTENIMIENTO: Trabaja en empresas que ofrecen servicios de mantenimiento de sistemas informáticos, incluyendo soporte técnico y resolución de problemas.</Text>
                </View>
            </View>

            <View style={styles.section} >
                <Text style={styles.sectionTitle}>Galeria</Text>
                <View style={styles.techGrid}>
                    <TouchableOpacity style={styles.boxGaleria} onPress={() => handleImagePress(require('../../assets/post.png'))}>
                        <Image style={styles.imgGaleria} source={require('../../assets/post.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxGaleria} onPress={() => handleImagePress(require('../../assets/post.png'))}>
                        <Image style={styles.imgGaleria} source={require('../../assets/post.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxGaleria} onPress={() => handleImagePress(require('../../assets/post.png'))}>
                        <Image style={styles.imgGaleria} source={require('../../assets/post.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxGaleria} onPress={() => handleImagePress(require('../../assets/post.png'))}>
                        <Image style={styles.imgGaleria} source={require('../../assets/post.png')} />
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <Pressable 
                        style={styles.modalOverlay} 
                        onPress={() => setModalVisible(false)}
                    >
                        <View style={styles.modalView}>
                            <Image 
                                onProgress={(e) => e.stopPropagation()}
                                source={selectedImage} 
                                style={styles.modalImage}
                                resizeMode="contain"
                            />
                        </View>
                    </Pressable>
                </Modal>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '100%',
        maxHeight: '90%',
        height: '100%',
        backgroundColor: 'transparent',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalImage: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 150,
    },
    header: {
        marginBottom: 24,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 800,
        textAlign: 'center',
        color: 'dodgerblue',
        marginBottom: 8,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 15,
        color: 'gray',
        textAlign: 'center',
    },
    section: {
        backgroundColor: '#ffffff',
        // borderRadius: 12,
        // padding: 16,
        paddingVertical: 20,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 4,
        // elevation: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 800,
        color: '#525C66FF',
        marginBottom: 12,
    },
    text: {
        fontSize: 14,
        color: '#34495e',
        lineHeight: 22,
    },
    infoBox: {
        gap: 0,
    },
    infoText: {
        fontSize: 14,
        color: '#2c3e50',
        marginBottom: 8,
        backgroundColor: '#EFF0F1FF',
        padding: 10,
        borderRadius: 5,
    },
    techGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    techItem: {
        width: '49%',
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    techName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 4,
        textAlign: 'center',
    },
    techDesc: {
        fontSize: 12,
        color: '#34495e',
    },
    boxGaleria: {
        width: '48%',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
    },
    imgGaleria: {
        width: '100%',
        height: 150,
        objectFit: 'cover',
    },
});

export default Acerca