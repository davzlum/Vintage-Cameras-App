import axios from 'axios';
import actionTypes from './actionTypes';
import toggleFavorite from './actionCreatorsFavorites';

jest.mock('axios');

describe('toggleFavorite function', () => {
  test('should dispatch DELETE_FAVORITE_PRODUCT', async () => {
    const dispatch = jest.fn();
    const isFavorite = true;
    const product = { name: 'hola' };
    const array = ['hola'];
    const user = { user: { _id: 'Hola' } };
    axios.mockResolvedValue();
    await toggleFavorite(isFavorite, product, user, array)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_FAVORITE_PRODUCT,
      product: { name: 'hola' },
    });
  });
  test('should dispatch ADD_PRODUCTS_TO_FAVORITES', async () => {
    const dispatch = jest.fn();
    const isOnCart = false;
    const product = { name: 'hola' };
    const array = ['hola'];
    const user = { user: { _id: 'Hola' } };
    axios.mockResolvedValue();
    await toggleFavorite(isOnCart, product, user, array)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_PRODUCTS_TO_FAVORITES,
      product: { name: 'hola' },
    });
  });
});
