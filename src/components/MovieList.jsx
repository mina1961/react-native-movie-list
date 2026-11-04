import { View, Text, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';

export default function MovieList({
    movies
}) {
    console.log('First movie:', movies[0]);
    return (
        <View >
            <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 'bold', marginTop: 50 }}>Каталог Филми</Text>
            <MovieCard {...movies[0]} />
        </View>
    );
}