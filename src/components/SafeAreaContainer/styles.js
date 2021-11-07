import {StyleSheet} from 'react-native';
import {Services} from '@themes';

const {isIphoneX, Platform} = Services;
console.log(` Platform.isIOS `, Platform.isIOS());
const sizeHeader = Platform.isIOS() ? isIphoneX.getStatusBarHeight() : 0;

const Styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    paddingTop: sizeHeader + 50,
  },
});

export default Styles;
