import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, RefreshControl, ActivityIndicator, Animated } from 'react-native';
import CardNew from '../components/NewsCard/CardNew';
import searchIco from '../assets/icons/searchDoc.png';

const fetchInitialArticles = async () => {
    try {
        const response = await fetch('https://dev.to/api/articles');
        const data = await response.json();
        const uniqueTags = new Set();
        
        data.forEach(article => {
            if (article.tags) {
                const firstTag = article.tags.split(',')[0].trim();
                if (firstTag) uniqueTags.add(firstTag);
            }
        });

        const tagsArray = Array.from(uniqueTags);
        const shuffled = tagsArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 15);
    } catch (error) {
        console.error('Error fetching initial articles:', error);
        return [];
    }
};
const News = () => {
    const [noticias, setNoticias] = useState([]);
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
    const [tagValue, setTagValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [tags, setTags] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchArticles = async (tag) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://dev.to/api/articles?tag=${tag || 'all'}`);
            const data = await response.json();
            setNoticias(data);
            setNoticiasFiltradas(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const refreshTags = async () => {
        const newTags = await fetchInitialArticles();
        setTags(newTags);
        if (!tagValue || refreshing) {
            setTagValue(newTags[0]);
            fetchArticles(newTags[0]);
        }
    };

    useEffect(() => {
        refreshTags();
    }, []);

    useEffect(() => {
        if (tagValue) {
            fetchArticles(tagValue);
        }
    }, [tagValue]);

    const handleChange = (value) => {
        setTagValue(value);
        setSearchQuery('');
    };

    const handleSearchChange = (text) => {
        setSearchQuery(text);
    };

    const handleSearchSubmit = () => {
        if (searchQuery.trim().toLowerCase() === '') {
            setNoticiasFiltradas(noticias);
            return;
        }

        fetchArticles(searchQuery.trim().toLowerCase());
        if (!tags.includes(searchQuery.trim().toLowerCase())) {
            setTags(prevTags => [searchQuery.trim().toLowerCase(), ...prevTags]);
        }
        setTagValue(searchQuery.trim().toLowerCase())
    };

    const onRefresh = async () => {
        setRefreshing(true);
        const newTags = await fetchInitialArticles();
        setTags(newTags);
        await fetchArticles(newTags[0]);
        setTagValue(newTags[0]);
        setRefreshing(false);
        setSearchQuery('');
    };

    return (
        <Animated.ScrollView 
            style={styles.container}
            scrollEventThrottle={16}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <View style={styles.headerPage}>
                <Text style={styles.pageTitle}>Noticias</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar por categorias..."
                        value={searchQuery}
                        onChangeText={handleSearchChange}
                    />
                    <TouchableOpacity onPress={handleSearchSubmit} style={styles.searchButton}>
                        <Image source={searchIco} style={styles.searchIco} />
                    </TouchableOpacity>
                </View>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.tagsContainer}
                >
                    {tags.map((tag, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.tagOption, tagValue === tag && styles.tagOptionActive]}
                            onPress={() => handleChange(tag)}
                        >
                            <Text style={[styles.tagText, tagValue === tag && styles.tagTextActive]}>{tag}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#007AFF" />
                    <Text style={styles.loadingText}>Cargando noticias...</Text>
                </View>
            ) : noticiasFiltradas.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No se encontraron noticias para esta búsqueda</Text>
                </View>
            ) : (
                noticiasFiltradas.map((noticia, index) => (
                    <CardNew key={index} data={noticia} />
                ))
            )}
            <View style={styles.vacio}></View>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center'
    },
    refreshingText: {
        textAlign: 'center',
        color: '#007AFF',
        marginBottom: 10,
        fontSize: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 3,
        marginBottom: 15,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        marginRight: 10,
    },
    searchButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    searchIco: {
        width: 20,
        height: 20,
        tintColor: '#007AFF',
    },
    tagsContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        // borderWidth: 2,

    },
    pageTitle: {
        fontSize: 22,
        fontWeight: 800,
        marginBottom: 10,
        color: '#007AFF',
        margin: 0,
        textAlign: 'center',
    },
    select: {
        marginBottom: 20,
        position: 'relative'
    },
    btnSelect: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginBottom: 10
    },
    tagOption: {
        backgroundColor: '#e0e0e0',
        padding: 8,
        borderRadius: 5,
        marginRight: 10,
    },
    tagOptionActive: {
        backgroundColor: '#007AFF',
    },
    tagText: {
        fontSize: 14,
    },
    tagTextActive: {
        color: 'white',
    },
    vacio: {
        height: 150
    }
});

export default News;