import React from 'react';
import {View, Text} from 'react-native';
import {Brand, SafeAreaContainer} from '@components';
import styles from './styles';

const Dashboard = props => {
  // console.log(`props `, props);
  return (
    <SafeAreaContainer scrollEnabled={false}>
      <View style={styles.body}>
        <Brand />
        <Text style={{marginTop: 40}}>Dashboard Screen</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default Dashboard;
