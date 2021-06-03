/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export function addToCart(product) {
  return {
    type: actionTypes.ADD_PRODUCTS_TO_CART,
    product,
  };
}

export function loadCart() {
  return {
    type: actionTypes.LOAD_CART_PRODUCT,
  };
}

export function deleteFromCart(product) {
  return {
    type: actionTypes.DELETE_CART_PRODUCT,
    product,
  };
}

export function updateCart(product) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${product._id}`, product);
    dispatch({
      type: actionTypes.UPDATE_PRODUCTS,
      product: data,
    });
  };
}
