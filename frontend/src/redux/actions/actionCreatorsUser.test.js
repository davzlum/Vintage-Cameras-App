import axios from 'axios';
import actionTypes from './actionTypes';
import {
  login,
  logout,
  signup,
  updateUser,
} from './actionCreatorsUser';

jest.mock('axios');

describe('login function', () => {
  test('should dispatch LOGIN', async () => {
    const dispatch = jest.fn();
    const email = 'david@gmail.com';
    const password = '123456';
    const data = { token: 'santi' };
    axios.post.mockResolvedValue({ data });
    await login(email, password)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOGIN,
      user: { token: 'santi' },
    });
  });
  test('should dispatch LOGIN_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();

    await login()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOGIN_ERROR,
    });
  });
});

describe('signup function', () => {
  test('should dispatch SIGN_UP', async () => {
    const dispatch = jest.fn();
    const dataFront = { name: 'Santi' };
    const data = { name: 'Santi' };
    axios.post.mockResolvedValue({ data });
    await signup(dataFront)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.SIGN_UP,
      user: { name: 'Santi' },
    });
  });
  test('should dispatch SIGN_UP_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();

    await signup()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.SIGN_UP_ERROR,
    });
  });
});

describe('logout function', () => {
  test('should dispatch LOGOUT', async () => {
    const dispatch = jest.fn();
    const userData = { name: 'Santi' };
    axios.post.mockResolvedValue();
    await logout(userData)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOGOUT,
      user: {},
    });
  });
  test('should dispatch LOGOUT_ERROR', async () => {
    const dispatch = jest.fn();
    axios.post.mockRejectedValue();

    await logout()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOGOUT_ERROR,
    });
  });
});

describe('updateUser function', () => {
  test('should dispatch UPDATE_USER', async () => {
    const dispatch = jest.fn();
    const userData = { name: 'Santi' };
    const data = { name: 'Santi' };
    axios.put.mockResolvedValue({ data });
    await updateUser(userData)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_USER,
      newUser: { name: 'Santi' },
    });
  });
  test('should dispatch UPDATE_USER_ERROR', async () => {
    const dispatch = jest.fn();
    axios.put.mockRejectedValue();

    await updateUser()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_USER_ERROR,
    });
  });
});
