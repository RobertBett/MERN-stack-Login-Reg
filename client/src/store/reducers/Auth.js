import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
};

export const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.AUTH_USER:
    console.log('ITWORKS', action.formData);
    return { ...state };
  default:
    return state;
  }
};
