/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ProductsList from './index';
import { render, screen } from '../../../utils/testUtils';
import { loadProducts } from '../../../redux/actions/actionCreators';
import actionTypes from '../../../redux/actions/actionTypes';

jest.mock('../../../redux/actions/actionCreators');

describe('ProductsList component', () => {
  beforeEach(() => {
    loadProducts.mockReturnValue({
      type: actionTypes.LOAD_PRODUCTS,
      products: [{
        productModel: 'mola', price: 5800, images: [], isFavorite: false,
      }],
    });
    const initialState = {
      products: [{
        productModel: 'mola', price: 5800, images: [], isFavorite: false,
      }],
      user: {},
      urlParam: 'Cameras',
    };
    render(<ProductsList />, { initialState });
  });
  test('Must contain ', async () => {
    expect(screen.getByText(/mola/i)).toBeInTheDocument();
  });
});
