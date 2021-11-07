import createStoreContext from './createStoreContext';

const initialStore = {};

const storeReducers = (state, action) => {
  switch (action.type) {
    case 'setProfile':
      return {
        ...state,
        profile: action.payload.profile,
      };
    default:
      return state;
  }
};

const setProfile = dispatch => {
  return payload => {
    // Do some API Request here
    dispatch({
      type: 'setProfile',
      payload,
    });
  };
};

export const {Provider, Context} = createStoreContext(
  storeReducers,
  {setProfile},
  initialStore,
);
