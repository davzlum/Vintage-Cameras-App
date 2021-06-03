import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './header.scss';
import logo from '../../../assets/logo.svg';
import cart from '../../../assets/shopping-cart-solid.svg';
import user from '../../../assets/user-solid.svg';
import nav from '../../../assets/bars-solid.svg';
import { loadCart } from '../../../redux/actions/actionCreatorsCart';

function Header({ cartList, dispatch }) {
  useEffect(() => {
    dispatch(loadCart());
  }, []);
  return (
    <header className="header">
      <ul className="header-container">
        <li className="header-container__nav">
          <img src={nav} alt="navigation" />
          <ul className="sections-list">
            <li className="section-item"><Link to="/">Home</Link></li>
            <li className="section-item"><Link to="/cameras">Cameras</Link></li>
            <li className="section-item">Lenses</li>
            <li className="section-item">Films</li>
          </ul>
        </li>
        <li className="header-container__logo">
          <img src={logo} alt="logo" />
        </li>
        <li className="header-container__right">
          <span className="header-cart">
            <Link to="/cart">
              <img src={cart} alt="cart" />
              {cartList.length
                ? (
                  <>
                    <span className="cart-number">{cartList.length}</span>
                    <span className="cart-circle"> </span>
                  </>
                )
                : <span />}
            </Link>
          </span>
          <span className="header-user">
            <img src={user} alt="user" />
          </span>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  cartList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ cartList }) {
  return { cartList };
}

export default connect(mapStateToProps)(Header);
