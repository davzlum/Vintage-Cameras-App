import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartProductsReducer from './cartProductsReducer';
import selectedProductReducer from './selectedProductReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  cartList: cartProductsReducer,
});

export default rootReducer;
