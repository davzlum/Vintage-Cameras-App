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
    let initialState;
    beforeEach(() => {
      initialState = {
        user: {},
        cartList: [
          {
            productModel: 'Leica',
            images: ['hola', 'adios'],
          },
        ],
      };
    });
    describe('And delete button from cart is clicked', () => {
      test('deleteFromCart function in invoked', () => {
        const { getByTestId } = render(<ShoppingCart initialState={initialState} />);
        const button = getByTestId('button-remove');
        toggleCart.mockImplementationOnce(() => ({
          type: actionTypes.DELETE_CART_PRODUCT,
          product: {
            productModel: 'Leica',
            images: ['hola'],
          },
        }));
        fireEvent.click(button);
        expect(toggleCart).toHaveBeenCalledTimes(1);
      });
    });
  });
});
