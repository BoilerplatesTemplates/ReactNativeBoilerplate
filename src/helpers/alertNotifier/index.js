import {Notifier, NotifierComponents, Easing} from 'react-native-notifier';

export default (alertType, title, desc) => {
  try {
    const titleAlert = title !== undefined ? title : 'Default title';
    const titleDescription =
      desc !== undefined
        ? desc
        : 'Default description AlertNotifier please send params';
    Notifier.showNotification({
      title: titleAlert,
      description: titleDescription,
      Component: NotifierComponents.Alert,
      duration: 4000, // 0 to disable auto hide alert || default 3000
      // showAnimationDuration: 800, // default 300
      // showEasing: Easing.bounce,
      componentProps: {
        alertType: alertType || 'error',
      },
    });
  } catch (error) {
    console.log(`CATCH func AlertNotifier() `, error);
  }
};
