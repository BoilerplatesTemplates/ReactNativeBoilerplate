/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {Brand, Button, SafeAreaContainer} from '@components';
import {NavigationService} from '@navigations';
import {Context as ProfileContext} from '@hooks';
import {AlertNotifier} from '@helpers';
import {testAPI} from './API';
import {I18n} from '@i18n';

import styles from './styles';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {setProfile} = useContext(ProfileContext);

  const goToDashboard = async () => {
    setLoading(true);
    const res = await testAPI();
    const {success, status, data, error} = res;

    if (success) {
      setProfile({profile: data});
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
