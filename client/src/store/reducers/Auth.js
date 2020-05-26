import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  authenticated: sessionStorage.getItem('userInfo'),
  errorMessage: false,
  emailAlready: false,
};

export const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.AUTH_USER:
    return {
      ...state,
      authenticated: action.token,
    };
  case actionTypes.AUTH_ERROR:
    if (action.status === 422) {
      return {
        ...state,
        emailAlready: true,
      };
    }
    else if (action.status === 401){
      return {
        ...state,
        wrongPassword: true,
      };
    }
    return {
      ...state,
      errorMessage: true,
    };

  default:
    return state;
  }
};
