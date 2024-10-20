import React from 'react';
import {Dimensions, View} from 'react-native';
import { CircleSnail } from 'react-native-progress';

const {width, height} = Dimensions.get('window');

export default function Loading() {
  return (
    <View
      style={{height, width}}
      className="absolute flex-row justify-center items-center bg-neutral-900">
      <CircleSnail thickness={12} size={160} color="#DDA916"/>
    </View>
  );
}
