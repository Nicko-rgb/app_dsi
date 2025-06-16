import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadStoredAuth = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                const storedAuth = await AsyncStorage.getItem('isAuthenticated');
                
                if (storedUser && storedAuth) {
                    setUser(JSON.parse(storedUser));
                    setIsAuthenticated(JSON.parse(storedAuth));
                }
            } catch (error) {
                console.error('Error loading stored auth:', error);
            }
        };
        
        loadStoredAuth();    
    }, []);

    const login = async (userData) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            await AsyncStorage.setItem('isAuthenticated', JSON.stringify(true));
            setIsAuthenticated(true);
            setUser(userData);
        } catch (error) {
            console.error('Error storing auth data:', error);
        }
    };

    const register = async (userData) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            await AsyncStorage.setItem('isAuthenticated', JSON.stringify(true));
            setIsAuthenticated(true);
            setUser(userData);
        } catch (error) {
            console.error('Error storing auth data:', error);
        }
    };

    const logout = async (navigation) => {
        try {
            await AsyncStorage.removeItem('user');
            await AsyncStorage.removeItem('isAuthenticated');
            setIsAuthenticated(false);
            setUser(null);
            if (navigation) {
                navigation.navigate('Navegador');
            }
        } catch (error) {
            console.error('Error removing auth data:', error);
        }
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            user,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};