
import { Text, View } from 'react-native';
import { colors } from './theme';
import data from '../data.json';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { useState } from 'react';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      {selectedMovie
        ? <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        : <MovieList movies={data.movies} onSelect={setSelectedMovie} />
      }
    </View>
  );
};
