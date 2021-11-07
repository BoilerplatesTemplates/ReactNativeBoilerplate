import * as React from 'react';
import {CommonActions} from '@react-navigation/native';

const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const resetStack = (routeName, params) => {
  const dispatch = CommonActions.reset({
    index: 1,
    routes: [{name: routeName, params: params}],
  });
  navigationRef.current?.dispatch(dispatch);
};

export default {
  navigate,
  navigationRef,
  resetStack,
};
