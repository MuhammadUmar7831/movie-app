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

const {width, height} = Dimensions.get('window');

export default function Movie() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isFavourite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4]);
  const [similarMovies, setSimilarMovies] = useState(null);
  const movieName = 'Harry Potter';

  const movie = route.params;
  useEffect(() => {
    console.log(movie);
  }, []);

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
              uri: 'https://irs.www.warnerbros.com/hero-banner-v2-mobile-png/movies/media/browser/HP_8COL_H_DD_4320x1080_300dpi_EN.png',
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
          {movieName}
        </Text>
        {/* status, release, runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Release • 2020 • 170 min
        </Text>

        {/* geners */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action •
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill •
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy
          </Text>
        </View>

        {/* desription */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Harry Potter is a film series based on the Harry Potter series of
          novels by J. K. Rowling. The series was produced and distributed by
          Warner Bros. Pictures and consists of eight fantasy films, beginning
          with Harry Potter and the Philosopher's Stone (2001) and culminating
          with Harry Potter and the Deathly Hallows – Part 2 (2011).
        </Text>
      </View>

      {/* cast */}
      <Cast navigation={navigation} cast={cast} />

      {/* similar movies */}
      <MovieList titl="Similar Movies" data={similarMovies}/>
    </ScrollView>
  );
}
