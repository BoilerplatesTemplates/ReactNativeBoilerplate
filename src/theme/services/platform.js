import {Platform as RNPlatform} from 'react-native';

export const isIOS = () => {
  try {
    if (RNPlatform.OS === 'ios') {
      return true;
    }
  } catch (error) {
    console.log('CATCH func isIOS() : ', error);
  }
};

export const isAndroid = () => {
  try {
    if (RNPlatform.OS === 'android') {
      return true;
    }
  } catch (error) {
    console.log('CATCH func isAndroid() : ', error);
  }
};

const Platform = {
  isIOS,
  isAndroid,
};

export default Platform;
