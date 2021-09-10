/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

export const Feed = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable onPress={() => console.log('Feed')}>
        <Text>Feed</Text>
      </Pressable>
    </View>
  );
};
