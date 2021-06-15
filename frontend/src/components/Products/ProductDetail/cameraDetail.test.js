/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../../../utils/matchMedia.mock';
import CameraDetail from './index';
import { render, screen } from '../../../utils/testUtils';
import { loadProduct } from '../../../redux/actions/actionCreators';
import actionTypes from '../../../redux/actions/actionTypes';

jest.mock('../../../redux/actions/actionCreators');

describe('ProductDetail component', () => {
  beforeEach(() => {
    loadProduct.mockReturnValue({
      type: actionTypes.LOAD_PRODUCT,
      product: {
        productModel: 'mola', price: 5800, images: [], isFavorite: false,
      },
    });
    const initialState = {
      selectedProduct: {
        productModel: 'mola', price: 5800, images: [], isFavorite: false,
      },
      user: {},
      urlParam: '12',
    };
    render(<CameraDetail />, { initialState });
  });
  test('Must contain ', async () => {
    expect(screen.getByText(/mola/i)).toBeInTheDocument();
  });
});
