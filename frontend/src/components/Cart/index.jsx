/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  loadCart, deleteFromCart, updateCart,
} from '../../redux/actions/actionCreatorsCart';

function ShoppingCart({ cartList, dispatch }) {
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  function getTotalCost(total, cost) {
    return total + cost;
  }
  function cartListTotalCost() {
    const total = cartList.map((x) => x.price * x.quantity);
    return total.reduce(getTotalCost);
  }
  function buyCartList() {
    cartList.forEach((product) => {
      const updatedProduct = { ...product, stock: product.stock - product.quantity };
      dispatch(updateCart(updatedProduct));
    });
    // dispatch(loadProducts());
  }

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__product-box">
        <div className="cart-title">
          <h3>MI CESTA</h3>
        </div>
        <ul className="shopping-cart__product-list">
          {cartList.length
            ? cartList.map((product) => (
              <li key={product._id} className="shopping-cart__product">
                <div className="shopping-cart__left">
                  <img src={product.image} alt={product.brand} />
                  <span>
                    {product.quantity}
                    {'x '}
                    {product.productType}
                    {': '}
                  </span>
                </div>
                <span className="shopping-cart__price">
                  {product.price}
                  {' €  '}
                  <button type="button" className="button-remove" data-testid="button-remove" onClick={() => dispatch(deleteFromCart(product))}>--</button>
                </span>

              </li>
            )) : <p>No products at cart</p>}
        </ul>
      </div>
      <div className="shopping-cart__total-cost">
        <span>
          Total:
          {'  '}
          {cartList.length ? cartListTotalCost() : 0}
          {' €  '}
        </span>
        <button type="button" data-testid="button-buy" className="button-buy" onClick={() => buyCartList()}>COMPRAR</button>
      </div>

    </div>
  );
}

ShoppingCart.propTypes = {
  cartList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ cartList }) {
  return { cartList };
}

export default connect(mapStateToProps)(ShoppingCart);
