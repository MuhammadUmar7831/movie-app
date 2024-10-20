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
import {useNavigation, useRoute} from '@react-navigation/native';
import MovieList from '../components/MovieList';
import {
  getPersonDetailsApiCall,
  getPersonMoviesApiCall,
} from '../apis/movie.api';
import Loading from '../components/Loading';

const {width, height} = Dimensions.get('window');

export default function Person() {
  const navigation = useNavigation();
  const route = useRoute();
  const [pesrsonMovies, setPesrsonMovies] = useState(null);
  const [person, setPerson] = useState(null);
  const [altImage, setAltImage] = useState(null);

  async function getPersonDetails() {
    const res = await getPersonDetailsApiCall(route.params.id);
    setPerson(res);
  }

  async function getPersonMovies() {
    const res = await getPersonMoviesApiCall(route.params.id);
    setPesrsonMovies(res.cast);
  }

  useEffect(() => {
    getPersonDetails();
    getPersonMovies();
  }, []);

  if (person === null || pesrsonMovies === null) {
    return <Loading />;
  }

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{paddingBottom: 20}}>
      {/* back button */}
      <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4 mt-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-[#DDA916] rounded-xl p-1">
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
      </SafeAreaView>

      {/* person details */}
      <View>
        <View
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 1,
          }}
          className="flex-row justify-center">
          <View
            style={{borderWidth: 1, borderColor: 'gray'}}
            className="items-center rounded-full overflow-hidden h-72 w-72">
            <Image
              source={{
                uri:
                  altImage !== null
                    ? altImage
                    : `https://image.tmdb.org/t/p/w500/${person.profile_path}`,
              }}
              alt="Image"
              style={{height: height * 0.43, width: width * 0.74}}
              onError={() =>
                setAltImage(
                  'https://png.pngtree.com/png-clipart/20240613/original/pngtree-persona-perfection-fubuki-sprite-in-gray-dress-for-visual-novel-png-image_15317738.png',
                )
              }
            />
          </View>
        </View>
        <View className="mt-8">
          <Text className="text-3xl text-white font-bold text-center">
            {person.name}
          </Text>

          <Text className="text-base text-neutral-500 text-center">
            {person.place_of_birth}
          </Text>
        </View>

        <View className="mx-3 mt-6 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 items-center px-2">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 font-semibold">
              {person.gender === 1 ? 'Female' : 'Male'}
            </Text>
          </View>
          {
            <View className="border-r-2 border-r-neutral-400 items-center px-2">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 font-semibold">
                {person.birthday ? person.birthday : 'NAN'}
              </Text>
            </View>
          }
          <View className="border-r-2 border-r-neutral-400 items-center px-2">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 font-semibold">
              {person.known_for_department}
            </Text>
          </View>
          <View className="items-center px-2">
            <Text className="text-white font-semibold">Popularilty</Text>
            <Text className="text-neutral-300 font-semibold">
              {person.popularity}
            </Text>
          </View>
        </View>

        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            {person.biography}
          </Text>
        </View>

        {/* personMovies */}
        <MovieList title="Movies" data={pesrsonMovies} />
      </View>
    </ScrollView>
  );
}
