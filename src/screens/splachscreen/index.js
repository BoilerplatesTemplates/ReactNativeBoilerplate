/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Brand, SafeAreaContainer} from '@components';
import styles from './styles';

const Splachscreen = props => {
  useEffect(() => {
    const id = setTimeout(() => props.navigation.replace('login'), 600);

    return () => clearTimeout(id);
  }, []);

  return (
    <SafeAreaContainer scrollEnabled={false}>
      <View style={styles.body}>
        <Brand />
      </View>
    </SafeAreaContainer>
  );
};

export default Splachscreen;
