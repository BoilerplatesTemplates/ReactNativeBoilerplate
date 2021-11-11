import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Icon = props => {
  try {
    const {activeOpacity, style, icon, onPress} = props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity || onPress ? 0.8 : 1}
        style={[style]}>
        {icon || <Text>icon</Text>}
      </TouchableOpacity>
    );
  } catch (error) {
    console.log('CATCH component <Icon/> : ', error);
  }
};

export default Icon;
