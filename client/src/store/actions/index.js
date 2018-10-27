import { AUTH_USER } from './types';

export const signin = formData => (dispatch) => {
  dispatch({ type: AUTH_USER, formData });
};

export const signup = formData => (dispatch) => {
  dispatch({ type: AUTH_USER, formData });
};
