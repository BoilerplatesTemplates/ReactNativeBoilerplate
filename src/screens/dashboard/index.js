import React, {useEffect, useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {Brand, Button, SafeAreaContainer} from '@components';
import {NavigationService} from '@navigations';
import {Context as ProfileContext} from '@hooks';
import {I18n} from '@i18n';
import styles from './styles';
import {AlertNotifier} from '@helpers';

const Dashboard = () => {
  const [locale, setLocale] = useState('');
  const {store, setProfile} = useContext(ProfileContext);
  let IP = store?.profile;

  const updateLangue = () => {
    const newLocale = I18n.currentLocale() === 'fr' ? 'ar' : 'fr';
    I18n.locale = newLocale;
    setLocale(newLocale);
  };

  useEffect(() => {
    setTimeout(
      () =>
        AlertNotifier('info', `${I18n.t('login.welcome')}`, 'Dashboard screen'),
      200,
    );
  }, [locale]);

  const logOut = () => {
    setProfile({profile: null});
    NavigationService.resetStack('login');
  };

  return (
    <SafeAreaContainer scrollEnabled={false}>
      <View style={styles.body}>
        <Brand />
        <View>
          <Text style={styles.label}>{I18n.t('example.title')}</Text>
          <Text style={styles.label}>
            Current Locale : {I18n.currentLocale()}
          </Text>
          <Text style={styles.title}>Dashboard Screen</Text>
          <Text style={styles.title}>{`IP : ${IP}`}</Text>
        </View>

        <Button title="Change Langue" onPress={updateLangue} />
        <Button style={styles.button} title="LogOut" onPress={logOut} />
      </View>
    </SafeAreaContainer>
  );
};

export default Dashboard;
