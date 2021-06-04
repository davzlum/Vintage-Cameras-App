/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL_LOGIN;

export default function login(email, password) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${url}/login`, email, password);
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
