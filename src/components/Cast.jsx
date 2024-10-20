import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Cast({navigation, cast}) {
  const charecterName = 'Harry Potter';
  const personName = 'Daniel RedCliffe';
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
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border-2 border-neutral-500">
                  <Image
                    className="rounded-2xl h-24 w-20"
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/DanielRadcliffe.jpg/220px-DanielRadcliffe.jpg',
                    }}
                  />
                </View>
                <Text className="text-white text-xs mt-1">
                  {charecterName.length > 10
                    ? charecterName.slice(0, 10) + '...'
                    : charecterName}
                </Text>
                <Text className="text-neutral-400 text-xs mt-1">
                  {personName.length > 10
                    ? personName.slice(0, 10) + '...'
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
