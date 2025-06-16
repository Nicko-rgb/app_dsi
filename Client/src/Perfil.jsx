import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';
import { useAuth } from './context/AuthContext'
import ConfigStyle from './utils/config.style'
import userImg from './assets/icons/user.png'
import yoP from './assets/perfil.jpg'
import pencilIco from './assets/icons/pencil.png'
import msgIco from './assets/icons/chat.png'
import logoutIco from './assets/icons/logout.png'
const { colors } = ConfigStyle()
import Loading from './components/Loader/Loading';
import PostCard from './components/Posts/PostCard';
import ImgView from './components/ImgView/ImgView';

const Perfil = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth()
    const [visible, setVisible] = useState(false)

    const handleLogout = () => {
        logout(navigation)
        return <Loading message={'Cerrando Sesión...'} />
    }
    
    return (
        <View style={{ backgroundColor: 'white'}} >
            <Header />
            <ScrollView style={styles.container} >
                <View style={styles.perfil}>
                    <TouchableOpacity onPress={() => setVisible(true)} >
                        <Image style={styles.imgUser} source={yoP} />
                    </TouchableOpacity>
                    {user && (
                        <>
                            <Text style={styles.name}>{user.nombres} {user.apellidos}</Text>
                            <Text style={styles.carrera}>{user.carrera} </Text>
                        </>
                    )}
                </View>
                <View style={styles.botones}>
                    <TouchableOpacity style={[styles.botonEdit, styles.botons]}>
                        <Image style={styles.icoEdit} source={pencilIco} />
                        <Text style={[styles.txtBtn, styles.txtEdit]} >Editar Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botonMsg, styles.botons]}>
                        <Image style={styles.icoMsg} source={msgIco} />
                        <Text style={styles.txtBtn} >Mensajes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.closeBtn, styles.botons]} onPress={() => handleLogout()}>
                        <Image style={styles.icoLogout} source={logoutIco} />
                        <Text style={styles.txtClose}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
                <PostCard post={'https://lf-cdn.trae.ai/obj/trae-ai-us/og.jpeg'} />
                <PostCard post={'https://www.marketing-empresas.com/wp-content/uploads/2018/04/MERKAWEBS-Dise%C3%B1o-grafico.jpg'} />
                <PostCard post={'https://res.cloudinary.com/dq2ug36ri/image/upload/fotooo1_zbezsr.jpg'} />
                <PostCard post={'https://blog.manzanaverde.la/wp-content/uploads/2022/07/Frutas-que-puedes-comer-en-invierno.png'} />
                <ImgView
                    visible={visible}
                    onClose={() => setVisible(false)}
                    imageUrl={yoP}
                    // imageUrl={'https://www.galdon.com/wp-content/uploads/2013/05/profesion-informatica-galdon-software.jpg'}
                />
                <View style={styles.piePerfil}>
                    <Text>No hay más!</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 110,
        paddingBottom: 100,
    },
    perfil: {
        alignItems: 'center',
        padding: 20,
    },
    imgUser: {
        borderRadius: 100,
        borderWidth: 1,
        height: 150,
        width: 150,
    },
    name: {
        fontWeight: 800,
        fontSize: 22
    },
    carrera: {
        fontSize: 16,
        color: 'gray',
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 20,
    },
    botons: {
        maxWidthwidth: 140,
        height: 42,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: colors.color1,
        padding: 10,
        gap: 5
    },
    botonEdit: {
        backgroundColor: colors.colorHover,
    },
    icoEdit: {
        width: 20,
        height: 20,
        tintColor: colors.color1,
    },
    txtEdit: {
        color: colors.color1,
        fontWeight: 600,
        fontSize: 16,
    },
    botonMsg: {
        backgroundColor: colors.color1,
    },
    icoMsg: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    txtBtn: {
        color: 'white',
        fontWeight: 600,
        fontSize: 16,
    },
    closeBtn: {
        backgroundColor: colors.color2,
        width: 100,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtClose: {
        color: 'white',
        fontWeight: 600,
        fontSize: 16,
    },
    icoLogout: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    piePerfil: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        width: '100%',
        marginBottom: 100,
    }
})
export default Perfil