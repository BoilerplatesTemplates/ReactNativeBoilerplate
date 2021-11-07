/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Brand, Button, SafeAreaContainer} from '@components';
import {I18n} from '@i18n';
import {testAPI} from './API';
import {NavigationService} from '@navigations';
import {AlertNotifier} from '@helpers';

import styles from './styles';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const goToDashboard = async () => {
    setLoading(true);
    const res = await testAPI();
    const {success, status, data, error} = res;
    console.log(`res : `, res);
    if (success) {
      setTimeout(() => NavigationService.resetStack('dashboard'), 600);
      return;
    }
    setLoading(false);
    AlertNotifier('error', '', error);
  };

  return (
    <SafeAreaContainer scrollEnabled={false}>
      <View style={styles.body}>
        <Brand />
        <Text style={styles.label}>{I18n.t('login.welcome')}</Text>
        <Text style={styles.label}>
          Accédez au dashboard après avoir appelé un test d'API
        </Text>
        <Button
          title="Go To Dashboard"
          onPress={goToDashboard}
          loading={loading}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default Login;
