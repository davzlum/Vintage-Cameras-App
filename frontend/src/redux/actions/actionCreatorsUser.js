/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const urlLogin = process.env.REACT_APP_LOGIN_URL;
const urlSignUp = process.env.REACT_APP_SIGN_UP_URL;

export function login(email, password) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(urlLogin, { email, password });
      dispatch({
        type: actionTypes.LOGIN,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOGIN_ERROR',
      });
    }
  };
}

export function signup(data) {
  return async (dispatch) => {
    try {
      await axios.post(urlSignUp, data);
      dispatch({
        type: actionTypes.SIGN_UP,
      });
    } catch (error) {
      dispatch({
        type: 'SIGN_UP_ERROR',
      });
    }
  };
}
