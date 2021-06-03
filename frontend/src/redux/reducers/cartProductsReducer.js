/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function cartReducer(cartList = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CART_PRODUCT:
      return cartList;

    case actionTypes.ADD_PRODUCTS_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const itemIndex = cartList
        .findIndex((product) => action.product._id === product._id);

      if (itemIndex > -1) {
        // eslint-disable-next-line no-param-reassign
        cartList[itemIndex] = {
          ...cartList[itemIndex],
          quantity: cartList[itemIndex].quantity + 1 || 1,
        };
        return [...cartList];
      }
      return [
        ...cartList,
        {
          ...action.product,
          quantity: 1,
        },
      ];

    case actionTypes.DELETE_CART_PRODUCT:
      cartList.splice(cartList.indexOf(action.product), 1);
      return [...cartList];

    case actionTypes.UPDATE_PRODUCTS:
      return [];
    default:
      return cartList;
  }
}

export default cartReducer;
