/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function favoritesReducer(favorites = [], action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_TO_FAVORITES:
      return [
        ...favorites,
        {
          ...action.product,
        },
      ];

    case actionTypes.DELETE_CART_PRODUCT:
      return [...favorites];

    case actionTypes.LOGIN:
      return action.user.user.favorites;
    default:
      return favorites;
  }
}

export default favoritesReducer;
