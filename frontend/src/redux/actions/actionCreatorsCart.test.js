import axios from 'axios';
import actionTypes from './actionTypes';
import {
  toggleCart,
  updateCart,
} from './actionCreatorsCart';

jest.mock('axios');

describe('updateCart function', () => {
  test('should dispatch UPDATE_CART', async () => {
    const dispatch = jest.fn();
    const product = { name: 'hola' };
    const data = { productModel: 'Leica' };
    axios.put.mockResolvedValue({ data });
    await updateCart(product)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_CART,
      product: { productModel: 'Leica' },
    });
  });
});

describe('toggleCart function', () => {
  test('should dispatch DELETE_CART_PRODUCT', async () => {
    const dispatch = jest.fn();
    const isOnCart = true;
    const product = { name: 'hola' };
    const array = ['hola'];
    const user = { user: { _id: 'Hola' } };
    axios.mockResolvedValue();
    await toggleCart(isOnCart, product, user, array)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_CART_PRODUCT,
      product: { name: 'hola' },
    });
  });
  test('should dispatch ADD_PRODUCTS_TO_CART', async () => {
    const dispatch = jest.fn();
    const isOnCart = false;
    const product = { name: 'hola' };
    const array = ['hola'];
    const user = { user: { _id: 'Hola' } };
    axios.mockResolvedValue();
    await toggleCart(isOnCart, product, user, array)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_PRODUCTS_TO_CART,
      product: { name: 'hola' },
    });
  });
});
