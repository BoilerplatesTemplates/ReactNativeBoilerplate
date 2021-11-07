import {StyleSheet} from 'react-native';
import FontWeight from './FontWeight';
import FontSize from './FontSize';
import FontFamily from './FontFamily';
import Colors from '../colors';

export default {
  ...StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.primary,
      fontFamily: FontFamily.regular,
    },
    textNormal: {
      fontSize: FontSize.normal,
      color: Colors.primary,
      fontFamily: FontFamily.regular,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.primary,
      fontFamily: FontFamily.regular,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.primary,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  }),
  FontFamily,
  FontSize,
  FontWeight,
};
