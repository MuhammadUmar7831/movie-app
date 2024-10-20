import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function MovieList({data, title}) {
  const navigation = useNavigation();

  function handleClick(movie) {
    navigation.navigate({name: 'Movie', params: movie, key: movie.id});
  }

  if (data === undefined || data === null) {
    return (
      <View className="bg-neutral-900">
        <Text className="text-[#DDA916] mx-4 text-2xl">
          😔 Error Fetching Data
        </Text>
      </View>
    );
  }

  return (
    <View className="space-y-3">
      <View className="flex-1 flex-row justify-between items-center px-4">
        <Text className="text-xl text-white font-bold">{title}</Text>
        {/* <TouchableOpacity>
          <Text className="text-[#DDA916] text-md">See All</Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView className="space-x-3 px-2" horizontal>
        {data.map((_data, index) => (
          <TouchableOpacity key={index} onPress={() => handleClick(_data)}>
            <View>
              <Image
                style={{width: width * 0.33, height: height * 0.22}}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${_data.poster_path}`,
                }}
              />
              <Text
                style={{maxWidth: width * 0.33}}
                className="text-white mt-2 text-md text-center">
                {_data.original_title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

const data_ = [
  {
    uri: 'https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg',
    movieName: 'Good Fellas',
  },
  {
    uri: 'https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF894,1000_QL80_.jpg',
    movieName: 'Forrest Gump',
  },
  {
    uri: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg',
    movieName: 'The Shawshank Redemption',
  },
  {
    uri: 'https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg',
    movieName: 'Joker (2019)',
  },
];
