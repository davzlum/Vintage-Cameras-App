import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartProductsReducer from './cartProductsReducer';
import selectedProductReducer from './selectedProductReducer';
import usersReducer from './usersReducer';
import favoritesReducer from './favoritesProductsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  cartList: cartProductsReducer,
  user: usersReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
