/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

export const Profile = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Messages')}>
      <View>
        <Text>Profile</Text>
      </View>
    </Pressable>
  );
};
