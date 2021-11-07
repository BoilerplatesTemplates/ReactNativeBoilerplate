import {StyleSheet} from 'react-native';
import {Colors} from '@themes';

const styles = StyleSheet.create({
  body: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
    marginTop: 15,
    marginHorizontal: 70,
    color: Colors.primary_dark,
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    marginTop: 15,
    marginHorizontal: 70,
  },
  button: {
    backgroundColor: Colors.error,
  },
});

export default styles;
