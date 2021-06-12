/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export default function toggleFavorite(isFavorite, product, user, array) {
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { isFavorite, product, array }, { headers: { Authorization: `Bearer ${user.token}` } });
    debugger;
    dispatch({
      type: isFavorite
        ? actionTypes.DELETE_FAVORITE_PRODUCT
        : actionTypes.ADD_PRODUCTS_TO_FAVORITES,
      product,
    });
  };
}
