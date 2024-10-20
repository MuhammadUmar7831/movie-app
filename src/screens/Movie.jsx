import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import {getMovieCastApiCall, getMovieDetailsApiCall, getSimilarMoviesApiCall} from '../apis/movie.api';
import Loading from '../components/Loading';

const {width, height} = Dimensions.get('window');

export default function Movie() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isFavourite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const movieName = 'Harry Potter';

  async function getMovieDetails() {
    const res = await getMovieDetailsApiCall(route.params.id);
    setMovieDetails(res);
  }
  
  async function getMovieCast() {
    const res = await getMovieCastApiCall(route.params.id);
    setCast(res.cast);
  }
  
  async function getSimilarMovies() {
    const res = await getSimilarMoviesApiCall(route.params.id);
    console.log(res)
    setSimilarMovies(res.results);
  }

  useEffect(() => {
    getMovieDetails();
    getMovieCast();
    getSimilarMovies();
  }, []);

  if (movieDetails === null || cast === null) {
    return <Loading />;
  }

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900">
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-[#DDA916] rounded-xl p-1">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
            <HeartIcon size="35" color={isFavourite ? '#DDA916' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`,
            }}
            style={{width, height: height * 0.55}}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{width, height: height * 0.4}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
          />
        </View>
      </View>

      {/* moview details */}
      <View style={{marginTop: -(height * 0.0)}} className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieDetails.original_title}
        </Text>
        {/* tag line */}
        <Text className="text-neutral-300 font-semibold text-sm text-center">
          {movieDetails.tagline}
        </Text>

        {/* status, release, runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Release • {movieDetails.release_date.slice(0, 4)} •{' '}
          {movieDetails.runtime} min
        </Text>

        {/* geners */}
        {movieDetails.genres && (
          <View className="flex-row justify-center mx-4 space-x-2">
            {movieDetails.genres.map((genre, index) => (
              <Text
                key={genre.id}
                className="text-neutral-400 font-semibold text-base text-center">
                {genre.name}{' '}
                {index !== movieDetails.genres.length - 1 && ' •'}
              </Text>
            ))}
          </View>
        )}

        {/* desription */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movieDetails.overview}
        </Text>
      </View>

      {/* cast */}
      <Cast navigation={navigation} cast={cast} />

      {/* similar movies */}
      <MovieList title="Similar Movies" data={similarMovies} />
    </ScrollView>
  );
}
