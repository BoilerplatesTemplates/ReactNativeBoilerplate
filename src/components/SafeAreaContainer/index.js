import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {Colors, ThemeStyles} from '@themes';
import Styles from './styles';

const SafeAreaContainer = props => {
  try {
    const {
      backgroundColor,
      contentContainerStyle,
      scrollEnabled,
      children,
      style,
    } = props;

    return (
      <View style={[Styles.SafeAreaView, style]}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundColor ? backgroundColor : Colors.white}
        />
        <ScrollView
          scrollEnabled={scrollEnabled}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={[ThemeStyles.fullSize, contentContainerStyle]}>
          {children}
        </ScrollView>
      </View>
    );
  } catch (error) {
    console.log('CATCH component <SafeAreaContainer/> : ', error);
    return null;
  }
};

SafeAreaContainer.defaultProps = {
  scrollEnabled: true,
};

export default SafeAreaContainer;
