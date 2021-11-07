import {useColorScheme} from 'react-native';
import * as isIphoneX from './is-iphone-x';
import * as Platform from './platform';

export const IsDarkMode = () => {
  const scheme = useColorScheme();
  const mode = scheme === 'dark';
  return mode;
};

const Services = {
  IsDarkMode,
  isIphoneX,
  Platform,
};

export default Services;
