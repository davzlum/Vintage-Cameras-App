/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';
import findSectionCart from '../../components/Products/ProductsList/finSectionCart';

const url = process.env.REACT_APP_URL;

export function addToCart(product, user, cart) {
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { cart: { ...cart, [product.section]: [...findSectionCart(product, user), product._id] } }, { headers: { Authorization: `Bearer ${user.token}` } });
    dispatch({
      type: actionTypes.ADD_PRODUCTS_TO_CART,
      product,
    });
  };
}

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
