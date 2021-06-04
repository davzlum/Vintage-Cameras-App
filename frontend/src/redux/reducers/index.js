import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartProductsReducer from './cartProductsReducer';
import selectedProductReducer from './selectedProductReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  cartList: cartProductsReducer,
  user: usersReducer,
});

export default rootReducer;
