import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.URL;

export default function loadProducts(section) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${url}/${section}`);
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
