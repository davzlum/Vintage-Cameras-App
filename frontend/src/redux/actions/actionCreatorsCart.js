/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export function loadCart() {
  return {
    type: actionTypes.LOAD_CART_PRODUCT,
  };
}

export function updateCart(product) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${url}/${product._id}`, product);
      dispatch({
        type: actionTypes.UPDATE_PRODUCTS,
        product: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_PRODUCTS_ERROR,
      });
    }
  };
}

export function toggleCart(isOnCart, product, user, array) {
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { isOnCart, product, array }, { headers: { Authorization: `Bearer ${user.token}` } });
    dispatch({
      type: isOnCart
        ? actionTypes.DELETE_CART_PRODUCT
        : actionTypes.ADD_PRODUCTS_TO_CART,
      product,
    });
  };
}
