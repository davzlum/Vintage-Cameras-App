/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';
import findOnlySection from '../../components/Products/ProductsList/findOnlySection';

function cartReducer(cartList = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_CART_PRODUCT:
      return cartList;

    case actionTypes.ADD_PRODUCTS_TO_CART:
      return {
        ...cartList,
        [action.product.section]: [
          ...findOnlySection(action.product.section, cartList),
          action.product,
        ],
      };

    case actionTypes.DELETE_CART_PRODUCT:
      return {
        ...cartList,
        [action.product.section]: [
          ...findOnlySection(action.product.section, cartList).filter((
            cartItem,
          ) => cartItem._id !== action.product._id),
        ],
      };

    case actionTypes.UPDATE_PRODUCTS:
      return {};
    case actionTypes.LOGIN:
      return action.user.user.cart;
    default:
      return cartList;
  }
}

export default cartReducer;
