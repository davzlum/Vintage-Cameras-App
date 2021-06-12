/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export function loadCart() {
  return {
    type: actionTypes.LOAD_CART_PRODUCT,
  };
}

export function deleteFromCart(product, user, cart) {
  cart.splice(cart.indexOf(product), 1);
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { cart: { ...cart } }, { headers: { Authorization: `Bearer ${user.token}` } });
    dispatch({
      type: actionTypes.DELETE_CART_PRODUCT,
      product,
    });
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

export function toggleCart(isOnCart, product, user, array) {
  // eslint-disable-next-line no-debugger
  debugger;
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
