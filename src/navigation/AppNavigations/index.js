import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationService} from '@navigations';

import {Splachscreen, Login, Dashboard} from '@screens';

import {Provider as AppProvider} from '@hooks';

const Stack = createStackNavigator();

const AppNavigations = () => {
  return (
    <AppProvider>
      <NavigationContainer ref={NavigationService.navigationRef}>
        <Stack.Navigator
          initialRouteName="splachscreen"
          screenOptions={() => ({
            headerShown: false,
          })}>
          <Stack.Screen name="splachscreen" component={Splachscreen} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default React.forwardRef(AppNavigations);
