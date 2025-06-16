import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// --- Definición del código fuente ---
const jsCodeText = `function saludo() {\n    console.log("Hola mundo desde JavaScript!");\n}\nsaludo();`;

const pyCodeText = `def saludo():\n    print("Hola mundo desde Python!")\n\nsaludo()`;

const keywordsJS = ['function', 'console', 'log'];
const keywordsPY = ['def', 'print'];

function tokenize(code, lang) {
    const tokens = [];
    let word = '';
    let inString = false;
    const keywords = lang === 'js' ? keywordsJS : keywordsPY;

    for (let i = 0; i < code.length; i++) {
        const char = code[i];

        if (char === '"' || char === "'") {
            if (inString) {
                word += char;
                tokens.push({ text: word, type: 'string' });
                word = '';
                inString = false;
            } else {
                if (word) {
                    tokens.push(getToken(word, keywords));
                    word = '';
                }
                word = char;
                inString = true;
            }
        } else if (inString) {
            word += char;
        } else if (/\s/.test(char)) {
            if (word) {
                tokens.push(getToken(word, keywords));
                word = '';
            }
            tokens.push({ text: char, type: 'space' });
        } else if (/[\(\)\{\};:.,]/.test(char)) {
            if (word) {
                tokens.push(getToken(word, keywords));
                word = '';
            }
            tokens.push({ text: char, type: 'symbol' });
        } else {
            word += char;
        }
    }
    if (word) tokens.push(getToken(word, keywords));

    return tokens.flatMap(token => token.text.split('').map(c => ({ ...token, text: c })));
}

function getToken(word, keywords) {
    if (keywords.includes(word)) return { text: word, type: 'keyword' };
    return { text: word, type: 'default' };
}

// --- Colores ---
const colors = {
    keyword: '#569CD6',
    string: '#CE9178',
    symbol: '#D4D4D4',
    default: '#DCDCAA',
    space: '#D4D4D4',
};

const Code = () => {
    const [language, setLanguage] = useState('js');
    const [displayedTokens, setDisplayedTokens] = useState([]);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        const code = language === 'js' ? jsCodeText : pyCodeText;
        const tokenList = tokenize(code, language);
        setTokens(tokenList);
        setDisplayedTokens([]);
    }, [language]);

    // Efecto de escritura letra por letra
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < tokens.length) {
                setDisplayedTokens(prev => [...prev, tokens[index]]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        return () => clearInterval(interval);
    }, [tokens]);

    // Cursor parpadeante
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Code Programming {language === 'js' ? 'JavaScript' : 'Python'}</Text>
            <ScrollView style={styles.codeBox}>
                <Text style={styles.codeText}>
                    {displayedTokens.map((token, i) => {
                        if (!token) return null;
                        return (
                            <Text key={i} style={{ color: colors[token.type] || '#D4D4D4' }}>
                                {token.text}
                            </Text>
                        );
                    })}
                    {cursorVisible && <Text style={styles.cursor}>|</Text>}
                </Text>
            </ScrollView>
            <View style={styles.btns}>
                <TouchableOpacity style={styles.btn_js} onPress={() => setLanguage('js')}>
                    <Text style={styles.btnText}>JavaScript</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_py} onPress={() => setLanguage('py')}>
                    <Text style={styles.btnText}>Python</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    codeBox: {
        backgroundColor: '#1e1e1e',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        maxHeight: 250,
        marginBottom: 20,
    },
    codeText: {
        fontFamily: 'monospace',
        fontSize: 16,
        lineHeight: 24,
        color: '#D4D4D4',
    },
    cursor: {
        color: '#ffffff',
    },
    btns: {
        flexDirection: 'row',
        gap: 10,
    },
    btn_js: {
        backgroundColor: '#f0db4f',
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
    },
    btn_py: {
        backgroundColor: '#4b8bbe',
        padding: 10,
        borderRadius: 8,
    },
    btnText: {
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Code;
