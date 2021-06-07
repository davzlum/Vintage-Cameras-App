import actionTypes from '../actions/actionTypes';

function productsReducer(product = {}, action) {
  if (action.type === actionTypes.LOAD_PRODUCT) {
    return action.product;
  }
  return product;
}

export default productsReducer;
