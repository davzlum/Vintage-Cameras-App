import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './header.scss';
import logo from '../../../assets/logo.svg';
import cart from '../../../assets/shopping-cart-solid.svg';
import userlogo from '../../../assets/user-solid.svg';
import nav from '../../../assets/bars-solid.svg';
import { loadCart } from '../../../redux/actions/actionCreatorsCart';

function Header({ cartList, dispatch, user }) {
  const history = useHistory();
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  useEffect(() => {
    if (!user.token) history.push('/login');
  }, []);

  return (
    <header className="header">
      <ul className="header-container">
        <li className="header-container__nav">
          <img src={nav} alt="navigation" />
          <ul className="sections-list">
            <li className="section-item"><Link to={`/${'cameras'}`}>Cameras</Link></li>
            <li className="section-item"><Link to={`/${'lenses'}`}>Lenses</Link></li>
            <li className="section-item"><Link to={`/${'films'}`}>Films</Link></li>
            <li className="section-item"><Link to="/favorites">My favorites</Link></li>
          </ul>
        </li>
        <li className="header-container__logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
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
            <img src={userlogo} alt="user" />
          </span>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  cartList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ cartList, user }) {
  return { cartList, user };
}

export default connect(mapStateToProps)(Header);
