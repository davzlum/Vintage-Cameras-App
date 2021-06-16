/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../../../utils/matchMedia.mock';
import CameraDetail from './index';
import { render, screen, fireEvent } from '../../../utils/testUtils';
import { loadProduct } from '../../../redux/actions/actionCreators';
import actionTypes from '../../../redux/actions/actionTypes';
import { toggleCart } from '../../../redux/actions/actionCreatorsCart';

jest.mock('../../../redux/actions/actionCreators');
const initialState = {
  selectedProduct: {
    productModel: 'mola', price: 5800, images: [], isFavorite: false, isOnCart: true,
  },
  user: {},
};

describe('ProductDetail component', () => {
  beforeEach(() => {
    loadProduct.mockReturnValue({
      type: actionTypes.LOAD_PRODUCT,
      product: {
        productModel: 'mola', price: 5800, images: [], isFavorite: false, isOnCart: true,
      },
    });
    render(<CameraDetail />, { initialState });
  });
  test('Must contain ', async () => {
    expect(screen.getByText(/mola/i)).toBeInTheDocument();
  });
  test('on press add to cart should appear text', () => {
    const { getByTestId } = render(<CameraDetail />, { initialState });
    const button = getByTestId('buttonAdd');
    toggleCart.mockImplementationOnce(() => ({
      type: actionTypes.ADD_PRODUCTS_TO_CART,
      product: {
        productModel: 'mola', price: 5800, images: [], isFavorite: false, isOnCart: true,
      },
    }));
    fireEvent.click(button);
    expect(screen.getByText(/Do you want/i)).toBeInTheDocument();
  });
});
