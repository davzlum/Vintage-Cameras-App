/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen, fireEvent } from '../../utils/testUtils';
import User from './index';
import { logout } from '../../redux/actions/actionCreatorsUser';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreatorsUser');

const initialState = {
  user: {},
};
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

describe('User Component', () => {
  test('should contain text My profile', () => {
    render(<User />, container);
    expect(screen.getByText(/My profile/i)).toBeInTheDocument();
  });
  test('on press logout should appear text', () => {
    const { getByTestId } = render(<User />, { initialState });
    const button = getByTestId('button-logout');
    logout.mockImplementationOnce(() => ({
      type: actionTypes.LOGOUT,
      user: {},
    }));
    fireEvent.click(button);
    expect(screen.getByText(/Are you sure/i)).toBeInTheDocument();
  });
});
