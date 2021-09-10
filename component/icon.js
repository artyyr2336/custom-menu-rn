/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Svg from 'react-native-svg';
import {iconList} from './iconList.js';

export const Icon = ({size = 18, color = '#000', name, ...props}) => {
  if (!iconList[name]) {
    return null;
  }

  const {viewBox, data} = iconList[name];

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || '0 0 512 512'}
      height={size}
      width={size}
      {...props}>
      {data(color)}
    </Svg>
  );
};
