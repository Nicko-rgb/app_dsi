import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from './components/Header'
import Login from './components/RegistroLogin/Login';
import Registro from './components/RegistroLogin/Registro'
import VerificaEmail from './components/RegistroLogin/VerificaEmail';
import Loading from './components/Loader/Loading';
import ConfigStylo from './utils/config.style';
const { colors } = ConfigStylo()
import secureIcon from './assets/icons/secure.png'
import back from './assets/icons/back.png'

const RegistroLogin = () => {

    const [title, setTitle] = useState('Registro/Iniciar Sesión');
    const [email, setEmail] = useState('');
    const [emailExiste, setEmailExiste] = useState(null);
    const [estado, setEstado] = useState({ loading: false, msg: '' })
    const [msgLoad, setMsgLoad] = useState('');

    // Cambiar el título automáticamente si emailExiste cambia
    useEffect(() => {
        if (emailExiste === true) {
            setTitle('Iniciar Sesión');
        } else if (emailExiste === false) {
            setTitle('Registrarse');
        } else {
            setTitle('Registrarse/Iniciar Sesión');
        }
    }, [emailExiste]);

    const handleEmailChange = (text) => {
        setEmail(text);
    }

    const renderView = () => {
        switch (emailExiste) {
            case true:
                return <Login styles={styles} email={email} estado={estado} setEstado={setEstado} setMsgLoad={setMsgLoad} />;
            case false:
                return <Registro styles={styles} email={email} estado={estado} setEstado={setEstado} setMsgLoad={setMsgLoad} />;
            default:
                return <VerificaEmail styles={styles} email={email} handleEmail={handleEmailChange} setEmailExiste={setEmailExiste} />
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            {estado.loading ? <Loading message={msgLoad} /> :
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={true}
                >
                    <View style={styles.center}>
                        <Text style={styles.title}>{title}</Text>
                        {emailExiste !== null && (
                            <TouchableOpacity onPress={() => setEmailExiste(null)} style={styles.back}>
                                <Image source={back} style={styles.backBtn} />
                            </TouchableOpacity>
                        )}
                        <Text style={styles.securo}>
                            <Image style={styles.icoSecure} source={secureIcon} /> Sus datos están protegidos.
                        </Text>
                        {renderView()}
                    </View>
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 120,
    },
    center: {
        margin: 'auto',
        alignItems: 'center',
        padding: 20,
        maxWidth: 450,
        width: '100%',
        backgroundColor: colors.colorHover,
        boxShadow: `0 0 10 10 ${colors.colorHover}`,
        position: 'relative',
    },
    title: {
        fontSize: 27,
        fontFamily: '',
        fontWeight: '800',
        marginBottom: 15,
        textAlign: 'center',
        color: colors.color1
    },
    back: {
        // borderWidth: 1,
        padding: 8,
        position: 'absolute',
        top: 10,
        left: 10,
        // borderRadius: 50,
        backgroundColor: 'rgba(78, 134, 255, 0.07)'
    },
    backBtn: {
        width: 20,
        height: 20,
        // tintColor: 'gray',
    },
    securo: {
        fontSize: 14,
        fontWeight: '600',
        alignItems: 'center',
        marginBottom: 10,
    },
    icoSecure: {
        width: 18,
        height: 18,
        tintColor: 'green',
        top: 5
    },
    form: {
        // borderWidth: 1,
        width: '100%',
    },
    formGroup: {
        marginBottom: 10,
        position: 'relative',
        paddingTop: 10
    },
    label: {
        fontSize: 16,
        fontWeight: 600,
    },
    input: {
        backgroundColor: 'white',
        fontSize: 18,
        borderColor: 'rgba(165, 189, 255, 0.52)',
        borderWidth: 2,
        paddingLeft: 10,
        color: '#333',
        fontWeight: 500
    },
    msg: {
        textAlign: 'center',
        color: 'gray',
        position: 'absolute',
        bottom: -25,
        width: '100%'
    },
    boton: {
        backgroundColor: colors.color1,
        margin: 'auto',
        marginTop: 25,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        borderRadius: 5,
    },
    botonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 600,
    },
    icoBtn: {
        height: 20,
        width: 20,
        tintColor: 'white'
    }
});

export default RegistroLogin;
