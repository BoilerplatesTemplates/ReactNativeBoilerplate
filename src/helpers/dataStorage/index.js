import AsyncStorage from '@react-native-async-storage/async-storage';
import {Constants} from '@helpers';

const getData = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('CATCH getAccessToken() ', error);
  }
};

const setData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log('CATCH setRefreshToken() ', error);
  }
};

const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('CATCH setRefreshToken() ', error);
  }
};

const multiRemoveData = async keys => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.log('CATCH multiRemoveData() ', error);
  }
  console.log('Done');
};

const resetData = async () => {
  try {
    await AsyncStorage.removeItem();
  } catch (error) {
    console.log('CATCH setRefreshToken() ', error);
  }
};

const resetTokensStorage = async () => {
  try {
    await multiRemoveData([Constants.accessToken, Constants.refreshToken]);
  } catch (error) {
    console.log('CATCH resetTokensStorage() : ', error);
  }
};

export default {
  getData,
  setData,
  removeData,
  resetData,
  multiRemoveData,
  resetTokensStorage,
};
