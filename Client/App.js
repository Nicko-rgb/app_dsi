import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './src/context/AuthContext';
import Views from './src/Views';
import Perfil from './src/Perfil';
import RegistroLogin from './src/RegistroLogin';
import ChatRoom from './src/components/Chats/ChatRoom'

import Upload from './src/Upload';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
    return (

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
            <AuthProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Navegador' >
                        <Stack.Screen name='Navegador' component={Views} options={{ headerShown: false }} />
                        <Stack.Screen name='Perfil' component={Perfil} options={{headerShown: false }}/>
                        <Stack.Screen name='RegistroLogin' component={RegistroLogin} options={{headerShown: false}} />
                        <Stack.Screen name="ChatRoom" component={ChatRoom} options={{ title: 'Chat', headerShown: false }} />
                        <Stack.Screen name='Upload' component={Upload} options={{headerShown: false}} />
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}