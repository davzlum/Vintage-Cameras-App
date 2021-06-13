/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';
import returnProductSection from '../../shared/returnProductSection';

function favoritesReducer(favorites = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_TO_FAVORITES:
      return {
        ...favorites,
        [action.product.section]: [
          ...returnProductSection(action.product.section, favorites),
          action.product,
        ],
      };

    case actionTypes.DELETE_FAVORITE_PRODUCT:
      return {
        ...favorites,
        [action.product.section]: [
          ...returnProductSection(action.product.section, favorites).filter((
            favoriteItem,
          ) => favoriteItem._id !== action.product._id),
        ],
      };

    case actionTypes.LOGIN:
      return action.user.user.favorites;

    default:
      return favorites;
  }
}

export default favoritesReducer;
