import React from 'react';
import {View} from 'react-native';
import {Logos} from '@assets';

const Brand = props => {
  const {height, width, style} = props;
  return (
    <View style={[{height, width}, style]}>
      <Logos.react_narive.default />
    </View>
  );
};

export default Brand;
