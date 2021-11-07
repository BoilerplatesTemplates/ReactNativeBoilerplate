/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ThemeStyles, Colors} from '@themes';
import {Spinner} from '@components';
import Styles from './styles';

const Button = props => {
  try {
    const {activeOpacity, style, title, onPress, loading, stylesTitle} = props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity || onPress ? 0.8 : 1}
        disabled={loading}
        style={[ThemeStyles.button, {opacity: loading ? 0.5 : 1}, style]}>
        {loading ? (
          <Spinner color={Colors.white} />
        ) : (
          <Text style={[Styles.title, stylesTitle]}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  } catch (error) {
    console.log('CRASH Component (Button) : ', error);
  }
};

Button.defaultProps = {
  loading: false,
  title: 'button',
};

export default Button;
