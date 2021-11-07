import React from 'react';
import {AppNavigations} from '@navigations';
import {NotifierWrapper} from 'react-native-notifier';

export default () => {
  return (
    <NotifierWrapper>
      <AppNavigations />
    </NotifierWrapper>
  );
};
