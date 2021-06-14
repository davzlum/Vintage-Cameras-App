/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ShoppingCart from './index';
import { screen, render, fireEvent } from '../../utils/testUtils';
import actionTypes from '../../redux/actions/actionTypes';
import {
  toggleCart,
} from '../../redux/actions/actionCreatorsCart';

jest.mock('../../redux/actions/actionCreatorsCart');

describe('Given a ShoppingCart component', () => {
  describe('When is rendered with empty initialState', () => {
    test('Should appear /No products at cart/ in document', () => {
      const initialState = { cartList: { cameras: [], lenses: [], films: [] } };
      render(<ShoppingCart />, { initialState });
      expect(screen.getByText(/No products at cart/i)).toBeInTheDocument();
    });
  });
  describe('When is added one product in cart', () => {
    beforeEach(() => {
      toggleCart.mockReturnValue({
        type: actionTypes.ADD_PRODUCTS_TO_CART,
        product: [{
          productModel: 'Leica', isOnCart: false,
        }],
      });
      const initialState = {
        product: {
          productModel: 'Leica', isOnCart: false,
        },
        cartList: {
          cameras: [{
            productModel: 'Leica',
            isOnCart: false,
            images: [],
          }],
          lenses: [],
          films: [],
        },
      };
      render(<ShoppingCart />, { initialState });
    });
    describe('And delete button from cart is clicked', () => {
      test('deleteFromCart function in invoked', () => {
        const button = screen.getByTestId('button-remove');
        toggleCart.mockImplementationOnce(() => ({
          type: actionTypes.DELETE_CART_PRODUCT,
        }));
        fireEvent.click(button);
        expect(toggleCart).toHaveBeenCalledTimes(1);
      });
    });
  });
});
