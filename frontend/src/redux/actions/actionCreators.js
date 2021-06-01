import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.URL;

export function loadProducts(section) {
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

export function addHero(hero) {
  return async (dispatch) => {
    const { data } = await axios.post(url, hero);
    dispatch({
      type: actionTypes.ADD_HERO,
      hero: data,
    });
  };
}
