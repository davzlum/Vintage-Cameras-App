import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../../assets/logo.svg';
import cart from '../../../assets/shopping-cart-solid.svg';
import user from '../../../assets/user-solid.svg';
import nav from '../../../assets/bars-solid.svg';

function Header() {
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
            <img src={cart} alt="cart" />
          </span>
          <span className="header-user">
            <img src={user} alt="user" />
          </span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
