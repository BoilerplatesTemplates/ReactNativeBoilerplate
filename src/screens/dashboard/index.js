import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Brand, Button, SafeAreaContainer} from '@components';
import {NavigationService} from '@navigations';
import {I18n} from '@i18n';
import styles from './styles';

const Dashboard = props => {
  const [locale, setLocale] = useState('');

  const updateLangue = () => {
    const newLocale = I18n.currentLocale() === 'fr' ? 'ar' : 'fr';
    I18n.locale = newLocale;
    setLocale(newLocale);
  };

  useEffect(() => {
    console.log(`I18n.currentLocale() : `, I18n.currentLocale());
  }, [locale]);

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
        </View>

        <Button title="Change Langue" onPress={updateLangue} />
        <Button
          style={styles.button}
          title="LogOut"
          onPress={() => NavigationService.resetStack('login')}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default Dashboard;
