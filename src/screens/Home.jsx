import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import {
  getPopularMoviesApiCall,
  getTopRatedMoviesApiCall,
  getTredingMoviesApiCall,
} from '../apis/movie.api';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [trending, setTrending] = useState(null);
  const navigation = useNavigation();

  async function getTopRatedMovies() {
    const res = await getTopRatedMoviesApiCall();
    setTopRated(res.results);
  }

  async function getPopularMovies() {
    const res = await getPopularMoviesApiCall();
    setPopular(res.results);
  }

  async function getTredingMovies() {
    const res = await getTredingMoviesApiCall();
    setTrending(res.results);
  }

  useEffect(() => {
    getTredingMovies();
    getTopRatedMovies();
    getPopularMovies();
  }, []);

  if (trending === null || topRated === null) {
    return <View></View>;
  }

  return (
    <View className="flex-1 bg-neutral-800 py-2">
      <SafeAreaView className="mb-3">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity>
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-3xl font-bold">
            <Text className="text-[#DDA916]">M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <TrendingMovies trending={trending} />
        <MovieList data={topRated} title="Upcoming" />
        <MovieList data={popular} title="Popular" />
      </ScrollView>
    </View>
  );
}
