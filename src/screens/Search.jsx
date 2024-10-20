import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function Search() {
  const navigation = useNavigation();
  const [result, setResult] = useState(null);
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
        }}
        className="mx-4 mb-3 pl-3 flex-row justify-between items-center rounded-full mt-5">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor="lightgray"
          className="pb-1 pl-6 text-base font-semibold text-white tracking-wide"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="rounded-full p-3 m-1 bg-neutral-500">
          <XMarkIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* results */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        className="space-y-3">
        <Text className="text-white font-semibold ml-1">
          Results {result === null ? 0 : result.length}
        </Text>
        <View className="flex-row justify-between flex-wrap">
          {result &&
            result.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.navigate('Movie', item)}>
                <View className="space-y-2 mb-2">
                  <Image
                    source={{uri: ''}}
                    style={{width: width * 0.44, height: height * 0.3}}
                  />
                  <Text className="text-neutral-400 ml-1">
                    {item.movieName > 22
                      ? item.movieName.slice(0, 22) + '...'
                      : item.movieName}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
