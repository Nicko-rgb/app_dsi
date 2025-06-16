import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import infoIco from '../assets/icons/info.png';
import teacherIco from '../assets/icons/teacher.png';
import moduleIco from '../assets/icons/module.png';
import horaIco from '../assets/icons/horario.png';
import bookIco from '../assets/icons/book.png';
import beneficiosIco from '../assets/icons/sube.png';
import devsIco from '../assets/icons/dev.png';
import Colors from '../utils/config.style';

import Acerca from '../components/Acerca/Acerca';
import Docentes from '../components/Docentes/Docentes';
import Modules from '../components/Modulos/Modules';
import Horario from '../components/Horario/Horario';
import Biblioteca from '../components/Biblioteca/Biblioteca';
import Beneficios from '../components/Beneficios/Beneficios';
import Devs from '../components/Devs/Devs';

const Dsi = () => {

    const { colors } = Colors();
    
    // Add state for active view
    const [activeView, setActiveView] = React.useState('Acerca');

    const views = [
        {name: 'Acerca', ico: infoIco, view: <Acerca />},
        {name: 'Docentes', ico: teacherIco, view: <Docentes />},
        {name: 'Módulos', ico: moduleIco, view: <Modules />},
        {name: 'Horarios', ico: horaIco, view: <Horario />},
        {name: 'Biblioteca', ico: bookIco, view: <Biblioteca />},
        {name: 'Beneficios', ico: beneficiosIco, view: <Beneficios />},
        {name: 'Devs', ico: devsIco, view: <Devs />}
    ]

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                {views.map((button, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[
                            styles.buttonNav,
                            activeView === button.name && styles.buttonNavActive
                        ]}
                        onPress={() => setActiveView(button.name)}
                    >
                        <Image 
                            source={button.ico} 
                            style={[
                                styles.imgNav,
                                activeView === button.name && styles.imgNavActive
                            ]} 
                        />
                        <Text 
                            style={[
                                styles.txtNav,
                                activeView === button.name && styles.txtNavActive
                            ]}
                        >
                            {button.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView style={styles.views}>
                {views.find(v => v.name === activeView)?.view}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row'
    
    },
    nav: {
        // borderWidth: 1,
        width: 55,
        height: '94%',
        gap: 2,
        backgroundColor: 'white',
        // sombra
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 5,
        elevation: 10,
    },
    buttonNav: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Colors().colors.colorHover,
        height: 50,
        gap: 2,
    },
    imgNav: {
        width: 20,
        height: 20,
        tintColor: 'gray'
    },
    txtNav: {
        fontSize: 10, 
        color: 'gray',
        fontWeight: 800,
    },
    buttonNavActive: {
        backgroundColor: Colors().colors.colorHover,
    },
    txtNavActive: {
        color: Colors().colors.color1, 
    },
    imgNavActive: {
        tintColor: Colors().colors.color1, 
    },
    views: {
        // borderWidth: 1,
    }

});

export default Dsi;