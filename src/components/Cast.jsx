import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';

export default function Cast({navigation, cast}) {
  const charecterName = 'Harry Potter';
  const personName = 'Daniel RedCliffe';

  useEffect(()=>{console.dir("cast", cast)},[])
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="mr-4 items-center"
                onPress={() => navigation.navigate('Person', person)}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}
                  className="overflow-hidden rounded-full h-20 w-20 items-center">
                  <Image
                    className="rounded-2xl h-24 w-20"
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                    }}
                  />
                </View>
                <Text className="text-white text-xs mt-1">
                  {person.character.length > 10
                    ? person.character.slice(0, 10) + '...'
                    : person.character}
                </Text>
                <Text className="text-neutral-400 text-xs mt-1">
                  {person.original_name.length > 10
                    ? person.original_name.slice(0, 10) + '...'
                    : person.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
