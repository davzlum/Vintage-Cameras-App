import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './header.scss';
import logo from '../../../assets/logo.svg';
import cart from '../../../assets/shopping-cart-solid.svg';
import userlogo from '../../../assets/user-solid.svg';
import nav from '../../../assets/bars-solid.svg';

function Header({ cartList, user }) {
  const [state, setState] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!user.token) history.push('/login');
  }, [user]);
  return (
    user.token
      ? (
        <header title="cameras" className="header">
          <ul className="header-container">
            <li className="header-container__nav">
              <button type="button" className={state ? 'block' : 'hidden'} onClick={() => setState(!state)}>
                <img src={nav} alt="navigation" />
                <ul className="sections-list">
                  <li className="section-item"><Link to={`/${'cameras'}`}>Cameras</Link></li>
                  <li className="section-item"><Link to={`/${'lenses'}`}>Lenses</Link></li>
                  <li className="section-item"><Link to={`/${'films'}`}>Films</Link></li>
                  <li className="section-item"><Link to="/favorites">My favorites</Link></li>
                </ul>
              </button>
            </li>
            <li className="header-container__logo">
              <Link to="/"><img data-testid="logo" src={logo} alt="logo" /></Link>
            </li>
            <li className="header-container__right">
              <span className="header-cart">
                <Link to="/cart">
                  <img src={cart} alt="cart" />
                  {cartList !== {}
                    ? (
                      <>
                        <span className="cart-number">
                          {
                        cartList.cameras.length
                        + cartList.lenses.length
                        + cartList.films.length
                  }
                        </span>
                        <span className="cart-circle"> </span>
                      </>
                    )
                    : <span />}
                </Link>
              </span>
              <span className="header-user">
                <Link to="/user">
                  <img src={userlogo} alt="user" />
                </Link>
              </span>
            </li>
          </ul>
          <div className="header-container-max">
            <div className="header-container-max__logo">
              <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="header-container-max__nav">
              <ul className="nav-left">
                <li className="section-item"><Link to={`/${'cameras'}`}>Cameras</Link></li>
                <li className="section-item"><Link to={`/${'lenses'}`}>Lenses</Link></li>
                <li className="section-item"><Link to={`/${'films'}`}>Films</Link></li>
                <li className="section-item"><Link to="/favorites">My favorites</Link></li>
              </ul>
              <ul className="nav-right">
                <li className="nav-right-cart">
                  <Link to="/cart">
                    <img src={cart} alt="cart" />
                    {cartList !== {}
                      ? (
                        <>
                          <span className="cart-number">
                            {
                        cartList.cameras.length
                        + cartList.lenses.length
                        + cartList.films.length
                  }
                          </span>
                          <span className="cart-circle"> </span>
                        </>
                      )
                      : <span />}
                  </Link>
                </li>
                <li className="nav-right-user">
                  <Link to="/user">
                    <img src={userlogo} alt="user" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      )
      : ''
  );
}

Header.propTypes = {
  cartList: PropTypes.shape([]).isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ cartList, user }) {
  return {
    cartList,
    user,
  };
}

export default connect(mapStateToProps)(Header);
