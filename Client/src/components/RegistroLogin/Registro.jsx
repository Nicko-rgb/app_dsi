import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import sendICo from '../../assets/icons/send.png'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import urlApp from '../../utils/urlApp'

const Registro = ({styles, email, estado, setEstado, setMsgLoad}) => {
    const { apiUrl } = urlApp()
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        carrera: '',
        password: ''
    });
    // const [estado, setEstado] = useState({ loading: false, msg: '' });
    const navigation = useNavigation();
    const { register } = useAuth();

    const handleRegistro = async () => {
        if (estado.loading) return;

        // Validate fields
        if (!formData.nombres || !formData.apellidos || !formData.carrera || !formData.password) {
            setEstado({ loading: false, msg: 'Todos los campos son requeridos' });
            return;
        }

        setEstado({ loading: true, msg: '' });
        setMsgLoad('Registrando...');

        try {
            const response = await fetch(`${apiUrl}/api/users/registro`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    email
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                setEstado({ loading: false, msg: 'Registro exitoso!' });
                register(data.user)
                navigation.navigate('Navegador');
            } else {
                setEstado({ loading: false, msg: data.msg || 'Error en el registro' });
            }

        } catch (error) {
            console.error('Error:', error);
            setEstado({ loading: false, msg: 'Error en el registro. Intente nuevamente.' });
        }
    };

    return (
        <View style={styles.form} >
            <View style={styles.formGroup}>
                <Text style={styles.label}>Nombres</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Nombres'
                    value={formData.nombres}
                    onChangeText={(text) => setFormData({...formData, nombres: text})}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Apellidos</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Apellidos'
                    value={formData.apellidos}
                    onChangeText={(text) => setFormData({...formData, apellidos: text})}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Carrera</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Carrera'
                    value={formData.carrera}
                    onChangeText={(text) => setFormData({...formData, carrera: text})}
                />
            </View>
            <View style={styles.formGroup} >
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput value={email} editable={false} style={styles.input} placeholder='Correo Electronico' />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Contraseña' 
                    secureTextEntry={true}
                    value={formData.password}
                    onChangeText={(text) => setFormData({...formData, password: text})}
                />
            </View>
            {estado.msg ? <Text style={styles.msg}>{estado.msg}</Text> : null}
            <TouchableOpacity 
                style={[styles.boton, estado.loading && { opacity: 0.7 }]} 
                onPress={handleRegistro}
                disabled={estado.loading}
            >
                <Text style={styles.botonText}>{estado.loading ? 'Registrando...' : 'Registrarse'}</Text>
                <Image style={styles.icoBtn} source={sendICo} />
            </TouchableOpacity>
        </View>
    )
}

export default Registro