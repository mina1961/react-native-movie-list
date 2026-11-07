
import { StatusBar, View } from 'react-native';
import { colors } from './theme';
import { MovieProvider } from './context/MovieContext';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { useState } from 'react';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };

  const backHandler = () => {
    setSelectedMovie(null);
  };

  return (
    <MovieProvider>
      <View style={{ backgroundColor: colors.background, flex: 1 }}>

    <StatusBar barStyle="light-content" />

      {selectedMovie
        ? <MovieDetails movie={selectedMovie} onBack={backHandler} />
        : <MovieList onSelect={selectMovieHandler} />
      }
    </View>
    </MovieProvider>
    
  );
};
