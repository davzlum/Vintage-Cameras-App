/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  loadCart, deleteFromCart, updateCart,
} from '../../redux/actions/actionCreatorsCart';
import './cart.scss';

function ShoppingCart({ cartList, dispatch }) {
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  function getTotalCost(total, cost) {
    return total + cost;
  }
  function cartListTotalCost() {
    const total = cartList.map((x) => x.price * 1);
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
    <>
      <h1>Cart</h1>
      <div className="shopping-cart">
        <div className="shopping-cart__product-box">
          <ul className="shopping-cart__product-list">
            {cartList.length
              ? cartList.map((product) => (
                <li key={product._id} className="shopping-cart__product">

                  <div className="shopping-cart__left">
                    <div className="image-container">
                      <img src={product?.images[0]} alt={product.cameraModel} />
                    </div>
                    <span className="information">
                      <Link to={`/${product.section}/:${product._id}`}>
                        <p className="title-model">{product.cameraModel}</p>
                      </Link>
                      <p className="title-lens">{product.specifications.lens}</p>
                    </span>
                  </div>
                  <span>
                    <p className="shopping-cart__price">
                      {product.price}
                      {' €  '}
                    </p>
                    <button type="button" className="button-remove" data-testid="button-remove" onClick={() => dispatch(deleteFromCart(product))}> </button>
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
    </>
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
