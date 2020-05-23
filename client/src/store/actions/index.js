import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signin = ({ email, password }) => (dispatch) => {
  axios.post('http://localhost:3090/signin', {
    email, password,
  }).then(({ data }) => {
    const { user } = data;
    console.log(user);
    sessionStorage.setItem('userInfo', JSON.stringify(user));
    dispatch({ type: AUTH_USER, token: user.token });
  }).catch((err) => {
    console.log(err);
  });
};


export const signup = ({
  firstName, lastName, email, password,
}) => (dispatch) => {
  axios.post('http://localhost:3090/signup',
    {
      firstName, lastName, email, password,
    }).then(({ data }) => {
    const { user } = data;
    sessionStorage.setItem('userInfo', JSON.stringify(user));
    dispatch({ type: AUTH_USER, token: user.token });
  }).catch((err) => {
    if (err.response) {
      const { status } = err.response;
      dispatch({ type: AUTH_ERROR, status });
    }
  });
};

export const logout = () => ({ type: AUTH_USER, token: null });
