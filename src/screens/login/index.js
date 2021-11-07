/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {Brand, Button, SafeAreaContainer} from '@components';
import styles from './styles';

const Splachscreen = props => {
  const [loading, setLoading] = useState(false);

  const goToDashboard = () => {
    setLoading(true);
    setTimeout(() => props.navigation.replace('dashboard'), 600);
  };

  return (
    <SafeAreaContainer scrollEnabled={false}>
      <View style={styles.body}>
        <Brand />

        <Button
          title="Go To Dashboard"
          onPress={goToDashboard}
          loading={loading}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default Splachscreen;
