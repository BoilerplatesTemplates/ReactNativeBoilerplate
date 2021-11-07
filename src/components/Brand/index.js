import React from 'react';
import {View} from 'react-native';
import {Logos} from '@assets';

const Brand = ({height = 50, width = 50, style}) => {
  return (
    <View style={[{height, width}, style]}>
      <Logos.react_narive.default />
    </View>
  );
};

export default Brand;
