import React, {useReducer} from 'react';

export default (reducer, action, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({children}) => {
    const [store, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};

    for (let key in action) {
      boundActions[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{store, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context: Context, Provider: Provider};
};
