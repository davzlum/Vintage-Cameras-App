/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../../utils/testUtils';
import Header from './index';

const initialState = {
  cartList: {
    cameras: [],
    lenses: [],
    films: [],
  },
  user: { token: 'hola' },
};

describe('Login Component', () => {
  test('should contain text username', () => {
    render(<Header />, { initialState });
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
