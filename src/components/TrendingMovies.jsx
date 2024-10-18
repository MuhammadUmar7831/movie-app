import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function TrendingMovies({trending}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Trending Movies</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
        {trending.map(movie => (
          <TouchableWithoutFeedback key={movie.id}>
            <View style={styles.imageContainer}>
              <Image source={{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}} style={styles.image} />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 16,
    marginBottom: 10,
  },
  imageContainer: {
    width: width * 0.6,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.2
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
