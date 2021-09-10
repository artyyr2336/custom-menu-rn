/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Pressable, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from './icon';

export const BottomTabBarMenu = ({state, navigation}) => {
  const renderItem = ({name}, index) => {
    const isFocused = state.index === index;

    const onPress = () => {
      if (!isFocused) {
        navigation.navigate(name);
      }
    };

    return (
      <Pressable
        key={index}
        style={
          name === 'News'
            ? {
                width: 60,
                height: 60,
                backgroundColor: isFocused ? '#c20047' : '#d92768',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -30,
              }
            : {
                width: 40,
                height: 40,
                borderRadius: 8,
                backgroundColor: isFocused ? '#0772b0' : '#2798d9',
                alignItems: 'center',
                justifyContent: 'center',
              }
        }
        onPress={onPress}>
        <Icon name={`tabBar${name}`} size={20} color={'#fff'} />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{flex: 0, paddingHorizontal: 10}}>
      <View
        jc="space-between"
        style={{
          marginVertical: 6,
          backgroundColor: '#44b9fc',
          padding: 6,
          borderRadius: 12,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {state.routes.map(renderItem)}
      </View>
    </SafeAreaView>
  );
};
