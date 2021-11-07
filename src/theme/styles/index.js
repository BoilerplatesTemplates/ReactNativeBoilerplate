import {StyleSheet} from 'react-native';
import {Colors} from '@themes';

export default StyleSheet.create({
  fullSize: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: Colors.primary_buttons,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 200,
    paddingVertical: 10,
    margin: 20,
    borderRadius: 8,
    shadowColor: 'rgba(16, 125, 143,.5)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 7,
  },
});
