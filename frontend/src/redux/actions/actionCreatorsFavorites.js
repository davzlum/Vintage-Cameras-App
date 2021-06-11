/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';
import findSectionFavorite from '../../components/Products/ProductsList/findSectionFavorite';
import filterSection from '../../components/Products/ProductsList/filterSection';

const url = process.env.REACT_APP_URL;

export function addToFavorites(product, user, favorites) {
  debugger;
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { favorites: { ...favorites, [product.section]: [...findSectionFavorite(product, user), product._id] } }, { headers: { Authorization: `Bearer ${user.token}` } });
    dispatch({
      type: actionTypes.ADD_PRODUCTS_TO_FAVORITES,
      product,
    });
  };
}

export function deleteFromFavorites(product, user, favorites) {
  const newFav = filterSection(product, favorites);
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { favorites: newFav }, { headers: { Authorization: `Bearer ${user.token}` } });
    dispatch({
      type: actionTypes.DELETE_FAVORITE_PRODUCT,
      newFav,
      product,
    });
  };
}

export function toggleFavorite(isFavorite, product, user) {
  return async (dispatch) => {
    await axios.put(`${url}/user/${user.user._id}`, { isFavorite, product }, { headers: { Authorization: `Bearer ${user.token}` } });
    debugger;
    dispatch({
      type: isFavorite
        ? actionTypes.DELETE_FAVORITE_PRODUCT
        : actionTypes.ADD_PRODUCTS_TO_FAVORITES,
      product,
    });
  };
}
