import axios from 'axios';
import actionTypes from './actionTypes';
import {
  loadProducts,
  loadProduct,
} from './actionCreators';

jest.mock('axios');

describe('loadProducts function', () => {
  test('should dispatch LOAD_PRODUCTS', async () => {
    const dispatch = jest.fn();
    const section = 'Hola';
    const user = { name: 'Hola' };
    const data = [{ productModel: 'Leica' }];
    axios.mockResolvedValue({ data });
    await loadProducts(section, user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PRODUCTS,
      products: [{ productModel: 'Leica' }],
    });
  });
  test('should dispatch LOAD_PRODUCTS_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();

    await loadProducts()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PRODUCTS_ERROR,
    });
  });
});

describe('loadProduct function', () => {
  test('should dispatch LOAD_PRODUCT', async () => {
    const dispatch = jest.fn();
    const productId = '1234';
    const section = 'Hola';
    const user = { name: 'Hola' };
    const data = { productModel: 'Leica' };
    axios.mockResolvedValue({ data });
    await loadProduct(productId, section, user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PRODUCT,
      product: { productModel: 'Leica' },
    });
  });
  test('should dispatch LOAD_PRODUCT_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();

    await loadProduct()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PRODUCT_ERROR,
    });
  });
});
