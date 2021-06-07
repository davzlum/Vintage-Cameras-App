/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export function addToFavorites(product, user, favorites) {
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { favorites: [...favorites, product._id] }, { headers: { Authorization: `Bearer ${user.token}` } });
    dispatch({
      type: actionTypes.ADD_PRODUCTS_TO_FAVORITES,
      product,
    });
  };
}

export function deleteFromFavorites(product, user, favorites) {
  favorites.splice(favorites.indexOf(product), 1);
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { favorites }, { headers: { Authorization: `Bearer ${user.token}` } });
    dispatch({
      type: actionTypes.DELETE_FAVORITE_PRODUCT,
      product,
    });
  };
}
