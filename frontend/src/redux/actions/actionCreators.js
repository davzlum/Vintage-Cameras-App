/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export function loadProducts(section, user) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${url}/products/${section}`, { headers: { Authorization: `Bearer ${user.token}` } });
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        products: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_PRODUCTS_ERROR,
      });
    }
  };
}

export function loadProduct(productId, section, user) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${url}/products/${section}/${productId}`, { headers: { Authorization: `Bearer ${user.token}` } });
      dispatch({
        type: actionTypes.LOAD_PRODUCT,
        product: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_PRODUCT_ERROR,
      });
    }
  };
}
