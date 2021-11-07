import {StyleSheet} from 'react-native';
import {Services, Colors, FontStyles} from '@themes';

const {bold, regular} = FontStyles?.FontFamily;
const {isIphoneX, Platform} = Services;
const sizeHeader = Platform.isIOS() ? isIphoneX.getStatusBarHeight() : 0;

const Styles = StyleSheet.create({
  SafeAreaContainer: {
    zIndex: 9,
    position: 'relative',
    paddingTop: sizeHeader,
  },
  body: {
    height: '100%',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
    marginHorizontal: 70,
    color: Colors.primary_dark,
  },
});

export default Styles;
