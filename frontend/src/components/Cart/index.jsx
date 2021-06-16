/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import {
  toggleCart,
} from '../../redux/actions/actionCreatorsCart';
import './cart.scss';

function ShoppingCart({ cartList, dispatch, user }) {
  function getTotalCost(total, cost) {
    return total + cost;
  }
  function cartListTotalCost() {
    const total = cartList.map((x) => x.price * 1);
    return total.reduce(getTotalCost);
  }

  // function buyCartList() {
  //   cartList.forEach((product) => {
  //     const updatedProduct = { ...product, stock: product.stock - product.quantity };
  //     dispatch(updateCart(updatedProduct));
  //   });
  // }

  const submit = (product) => {
    confirmAlert({
      title: 'Confirm to remove',
      message: 'Are you sure you want to remove this product from your cart',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(toggleCart(product.isOnCart,
            product, user, 'cart')),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <main>
      <h1 className="section-title">Cart</h1>
      <div className="shopping-cart">
        <div className="shopping-cart__product-box">
          <ul className="shopping-cart__product-list">
            {cartList.length
              ? cartList.map((product) => (
                <li key={product._id} className="shopping-cart__product">

                  <div className="shopping-cart__left">
                    <div className="image-container">
                      <img src={product.images[0]} alt={product.productModel} />
                    </div>
                    <span className="information">
                      <Link to={`/${product.section}/${product._id}`}>
                        <p className="title-model">{product.productModel}</p>
                      </Link>
                      <p className="title-lens">{product?.specifications?.lens}</p>
                    </span>
                  </div>
                  <span>
                    <p className="shopping-cart__price">
                      {product.price}
                      {' €  '}
                    </p>
                    <button type="button" data-testid="button-remove" className="button-remove" onClick={() => submit(product)}> </button>
                  </span>
                </li>
              )) : <p>No products at cart</p>}
          </ul>
        </div>
        <div className="shopping-cart__total-cost">
          <span>
            Total:
          </span>
          <span>
            {'  '}
            {cartList.length ? cartListTotalCost() : 0}
            {' €  '}
          </span>
        </div>
        <div className="button-container">
          <Link to="/"><button type="button" data-testid="button-continue" className="continue">Continue</button></Link>
          <button type="button" data-testid="button-buy" className="buy">Buy</button>
        </div>
      </div>
    </main>
  );
}

ShoppingCart.propTypes = {
  user: PropTypes.shape({}).isRequired,
  cartList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ cartList: { cameras, lenses, films }, user }) {
  return {
    cartList: [...cameras, ...lenses, ...films].map((product) => ({
      ...product,
      isOnCart: true,
    })),
    user,
  };
}

export default connect(mapStateToProps)(ShoppingCart);
