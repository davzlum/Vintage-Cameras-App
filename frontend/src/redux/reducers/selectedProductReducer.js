import actionTypes from '../actions/actionTypes';

function selectedProductReducer(product = {}, action) {
  if (action.type === actionTypes.LOAD_PRODUCT) {
    return action.product;
  }
  return product;
}

export default selectedProductReducer;
