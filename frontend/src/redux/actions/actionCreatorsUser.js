/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const urlLogin = process.env.REACT_APP_LOGIN_URL;

export default function login(email, password) {
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
