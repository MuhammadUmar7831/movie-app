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
import React, {useState} from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import MovieList from '../components/MovieList';

const {width, height} = Dimensions.get('window');

export default function Person() {
  const navigation = useNavigation();
  const [pesrsonMovies, setPesrsonMovies] = useState(null);

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
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500">
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/DanielRadcliffe.jpg/220px-DanielRadcliffe.jpg',
              }}
              style={{height: height * 0.43, width: width * 0.74}}
            />
          </View>
        </View>
        <View className="mt-8">
          <Text className="text-3xl text-white font-bold text-center">
            Daniel RedCliffe
          </Text>

          <Text className="text-base text-neutral-500 text-center">
            London • United Kingdom
          </Text>
        </View>

        <View className="mx-3 mt-6 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 items-center px-2">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 font-semibold">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 items-center px-2">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 font-semibold">1964-09-02</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 items-center px-2">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 font-semibold">Acting</Text>
          </View>
          <View className="items-center px-2">
            <Text className="text-white font-semibold">Popularilty</Text>
            <Text className="text-neutral-300 font-semibold">64.23</Text>
          </View>
        </View>

        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Daniel Jacob Radcliffe (born 23 July 1989)[1] is an English actor.
            He rose to fame at age 12 when he began portraying Harry Potter in
            the Harry Potter film series. Radcliffe plays Potter in all eight
            films in the series, beginning with Harry Potter and the
            Philosopher's Stone (2001) and concluding with Harry Potter and the
            Deathly Hallows – Part 2 (2011). Radcliffe branched out to stage
            acting in 2007, starring in the West End and Broadway productions of
            Equus. He returned to Broadway in the musical How to Succeed in
            Business Without Really Trying (2011), earning a Grammy Award
            nomination.
          </Text>
        </View>

        {/* personMovies */}
        <MovieList title="Movies" data={pesrsonMovies} />
      </View>
    </ScrollView>
  );
}
