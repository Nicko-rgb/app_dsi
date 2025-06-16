import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import loginIco from '../../assets/icons/login.png'
import urlApp from '../../utils/urlApp';

const Login = ({ styles, email, estado, setEstado, setMsgLoad}) => {
    const navigation = useNavigation();
    const { login } = useAuth();
    const [password, setPassword] = useState('');
    const { apiUrl } = urlApp();

    const handleLogin = async () => {
        if (estado.loading) return;
        if (!password.trim()) {
            setEstado({ loading: false, msg: 'Por favor ingrese su contraseña' });
            return;
        }
        setEstado({ loading: true, msg: '' });
        setMsgLoad('Iniciando sesión...');
        try {
            const response = await fetch(`${apiUrl}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setEstado({ loading: false, msg: 'Inicio de sesión exitoso' });
                login(data.user);
                navigation.navigate('Navegador');
            } else {
                setEstado({ loading: false, msg: data.msg || 'Error en el inicio de sesión' });
            }
        } catch (error) {
            console.error('Error:', error);
            setEstado({ loading: false, msg: 'Error en el servidor. Intente nuevamente.' });
        }
    };

    return (
        <View style={styles.form} >
            <View style={styles.formGroup} >
                <Text style={styles.label} >Correo Electrónico</Text>
                <TextInput style={styles.input} value={email} editable={false} placeholder='Correo Electrónico' />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            {estado.msg ? <Text style={styles.msg}>{estado.msg}</Text> : null}
            <TouchableOpacity
                style={[styles.boton, estado.loading && { opacity: 0.7 }]}
                onPress={handleLogin}
                disabled={estado.loading}
            >
                <Text style={styles.botonText}>{estado.loading ? 'Iniciando...' : 'Iniciar Sesión'}</Text>
                <Image style={styles.icoBtn} source={loginIco} />
            </TouchableOpacity>
        </View>
    )
}

export default Login