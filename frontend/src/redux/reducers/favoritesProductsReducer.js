/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';
import findOnlySection from '../../components/Products/ProductsList/findOnlySection';

function favoritesReducer(favorites = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_TO_FAVORITES:
      return {
        ...favorites,
        [action.product.section]: [
          ...findOnlySection(action.product.section, favorites),
          action.product,
        ],
      };

    case actionTypes.DELETE_FAVORITE_PRODUCT:
      // eslint-disable-next-line no-debugger
      debugger;
      return {
        ...favorites,
        [action.product.section]: [
          ...findOnlySection(action.product.section, favorites).filter((
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
