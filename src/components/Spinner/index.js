import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Colors} from '@themes';

const Spinner = props => {
  try {
    const {color, style, size} = props;
    return (
      <ActivityIndicator
        style={style}
        color={color || Colors.white}
        size={size}
      />
    );
  } catch (error) {
    console.log('CRASH Component (Spinner) : ', error);
  }
};

export default Spinner;
