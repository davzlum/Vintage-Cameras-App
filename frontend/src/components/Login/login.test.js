/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen, fireEvent } from '../../utils/testUtils';
import { login } from '../../redux/actions/actionCreatorsUser';
import actionTypes from '../../redux/actions/actionTypes';
import Login from './index';

jest.mock('../../redux/actions/actionCreatorsUser');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Login Component', () => {
  test('should contain text name', () => {
    render(<Login />, container);
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
  test('On press button login should dispatch login', () => {
    const { getByTestId } = render(<Login />);
    const button = getByTestId('login-button');
    login.mockImplementationOnce(() => ({
      type: actionTypes.LOGIN,
      user: { user: { cart: {}, favorites: {} } },
    }));
    fireEvent.click(button);
    expect(login).toHaveBeenCalledTimes(1);
  });
});
