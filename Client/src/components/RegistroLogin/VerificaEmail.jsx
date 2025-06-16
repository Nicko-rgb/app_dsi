import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, Animated, TouchableOpacity, TextInput } from 'react-native';
import flecha from '../../assets/icons/back.png'
import urlApp from '../../utils/urlApp';

const Verifica = ({ styles, email, handleEmail, setEmailExiste }) => {

    const [estado, setEstado] = useState({ loading: false, msg: '' })
    const [isFocused, setIsFocused] = useState(false);
    const labelPosition = useRef(new Animated.Value(0)).current;
    const {apiUrl} = urlApp();

    useEffect(() => {
        Animated.timing(labelPosition, {
            toValue: (isFocused || email) ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
        setEstado({ msg: '' })
    }, [isFocused, email]);

    const labelStyle = {
        position: 'absolute',
        left: 10,
        top: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [23, 0], // cambia aquí para ajustar la altura
        }),
        fontSize: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [17, 12], // más pequeño cuando flota
        }),
        color: isFocused ? '#6200ee' : '#aaa',
        zIndex: 1,
    };

    const handleVerifica = async () => {
        if (estado.loading) return;
        if (!email.trim()) {
            setEstado({ loading: false, msg: 'Por favor ingrese un email' });
            return;
        }
        setEstado({ loading: true, msg: '' });
        try {
            const response = await fetch(`${apiUrl}/api/users/verifica-email`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setEstado({ loading: false, msg: data.msg });
            
            if (data.existe) {
                setEmailExiste(true);  // This will redirect to Login
            } else {
                setEmailExiste(false); // This will redirect to Register
            }
        } catch (error) {
            console.error('Error details:', error);
            setEstado({ loading: false, msg: 'Error al verificar el email. Por favor intente nuevamente.' });
        }
    }

    return (
        <View style={styles.form}>
            <View style={styles.formGroup}>
                <Animated.Text style={labelStyle}>
                    Correo Electrónico
                </Animated.Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={handleEmail}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder=""
                />
                <Text style={styles.msg}>{estado.msg}</Text>
            </View>
            <TouchableOpacity
                style={[styles.boton, estado.loading && { opacity: 0.7 }]}
                onPress={() => handleVerifica()}
                disabled={estado.loading}
            >
                <Text style={styles.botonText}>{estado.loading ? 'Verificando...' : 'Continuar'} </Text>
                <Image style={[styles.icoBtn, { transform: [{ rotate: '180deg' }], height: 15, width: 15 }]} source={flecha} />
            </TouchableOpacity>
        </View>
    )
}

export default Verifica