/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const urlUser = process.env.REACT_APP_URL;
const urlLogin = process.env.REACT_APP_LOGIN_URL;
const urlLogout = process.env.REACT_APP_LOGOUT_URL;
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

export function signup(dataFront) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(urlSignUp, dataFront);
      dispatch({
        type: actionTypes.SIGN_UP,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: 'SIGN_UP_ERROR',
      });
    }
  };
}

export function logout(userData) {
  return async (dispatch) => {
    try {
      await axios.post(urlLogout, userData);
      dispatch({
        type: actionTypes.LOGOUT,
        user: {},
      });
    } catch (error) {
      dispatch({
        type: 'LOGIN_ERROR',
      });
    }
  };
}

export function updateUser(userData) {
  return async (dispatch) => {
    // eslint-disable-next-line no-debugger
    debugger;
    try {
      const { data } = await axios.put(`${urlUser}/user/${userData.user._id}`, userData);
      dispatch({
        type: actionTypes.UPDATE_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOGIN_ERROR',
      });
    }
  };
}
