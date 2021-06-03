import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartProductsReducer from './cartProductsReducer';
import selectedProductReducer from './selectedProductReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  cartProducts: cartProductsReducer,
});

export default rootReducer;
