/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen, fireEvent } from '../../../utils/testUtils';
import EditUser from './index';
import { updateUser } from '../../../redux/actions/actionCreatorsUser';
import actionTypes from '../../../redux/actions/actionTypes';

jest.mock('../../../redux/actions/actionCreatorsUser');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  const initialState = {
    user: { user: { name: 'Hola' } },
  };
  render(<EditUser />, { initialState });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('EditUser Component', () => {
  test('should contain text name', () => {
    render(<EditUser />, container, { user: { user: { name: 'Hola' } } });
    expect(screen.getByText(/Address/i)).toBeInTheDocument();
  });
  test('On press button submit should dispatch updateUser', () => {
    const { getByTestId } = render(<EditUser />, container, { user: { user: { name: 'Hola' } } });
    const button = getByTestId('button-submit');
    updateUser.mockImplementationOnce(() => ({
      type: actionTypes.UPDATE_USER,
      newUser: { user: { name: 'Hola' } },
    }));
    fireEvent.click(button);
    expect(updateUser).toHaveBeenCalledTimes(1);
  });
});
