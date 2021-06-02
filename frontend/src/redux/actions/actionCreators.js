/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export function loadProducts(section) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${url}/${section}`, { headers: { Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjIyNjQ0MjUwfQ.x4_E-fZiLhOVbG7EFRwqJwDrUigQMnuRvQRS6TqXTXA'}` } });
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        products: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_PRODUCTS_ERROR',
      });
    }
  };
}

export function addProduct(product, section) {
  return async (dispatch) => {
    const { data } = await axios.post(`${url}/${section}`, product);
    dispatch({
      type: actionTypes.ADD_PRODUCT,
      product: data,
    });
  };
}

export function deleteProduct(productId, section) {
  return async (dispatch) => {
    await axios.delete(`${url}/${section}/${productId}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      productId,
    });
  };
}

export function updateProduct(product, section) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${section}/${product._id}`, product);
    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      product: data,
    });
  };
}

export function loadProduct(product, section) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${section}/${product._id}`);
    dispatch({
      type: actionTypes.LOAD_PRODUCT,
      product: data,
    });
  };
}
