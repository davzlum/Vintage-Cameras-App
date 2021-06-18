/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/testUtils';
import Register from './index';
import { signup } from '../../redux/actions/actionCreatorsUser';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreatorsUser');

describe('Register Component', () => {
  test('should contain text name', () => {
    render(<Register />);
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
  test('and on press sign up should contain text Register Completed', () => {
    const { getByTestId } = render(<Register />);
    const button = getByTestId('submit');
    signup.mockImplementationOnce(() => ({
      type: actionTypes.SIGN_UP,
      user: {
        name: 'Santi',
      },
    }));
    fireEvent.submit(button);
    expect(signup).toHaveBeenCalled();
  });
});
