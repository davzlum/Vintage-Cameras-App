/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Favorites from './index';
import { render, screen } from '../../utils/testUtils';

describe('Favorites component', () => {
  beforeEach(() => {
    const initialState = {
      favorites: {
        cameras: [{
          productModel: 'mola', price: 5800, images: [], isFavorite: false,
        }],
        lenses: [],
        films: [],
      },
      user: {},
    };
    render(<Favorites />, { initialState });
  });
  test('Must contain ', async () => {
    expect(screen.getByText(/mola/i)).toBeInTheDocument();
  });
});
