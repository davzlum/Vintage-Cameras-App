/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function productsReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return action.products;

    case actionTypes.DELETE_PRODUCT:
      return products.filter((product) => product._id !== action.productId);

    case actionTypes.ADD_PRODUCT:
      return [
        ...products,
        action.product,
      ];

    case actionTypes.UPDATE_PRODUCT:
      return products.map(
        (product) => (product._id === action.product._id
          ? { ...product, ...action.product }
          : product),
      );

    default:
      return products;
  }
}

export default productsReducer;
