import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

import ar from './ar.json';
import fr from './fr.json';

I18n.fallbacks = true;

I18n.translations = {
  ar,
  en: fr,
  fr: fr,
};

ReactNative.I18nManager.allowRTL(I18n.currentLocale().indexOf('ar') === 0);

export default I18n;
