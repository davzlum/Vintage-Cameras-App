import React from 'react';
import logo from '../../assets/logo.svg';
import './login.css';

function Login() {
  return (
    <div className="login">
      <div className="login-information">
        <img src={logo} alt="logotipe" />
        <form action="/login" method="POST">
          <div className="form-floating">
            <label htmlFor="email">
              <span>Email</span>
              <input className="form-control" type="text" placeholder="email" id="email" name="email" />
            </label>
          </div>
          <div className="form-floating">
            <label htmlFor="password">
              <span>Password</span>
              <input className="form-control" type="password" placeholder="password" id="password" name="password" />
            </label>
          </div>
          <div className="button">
            <input className="button__item" type="submit" name="login-button" id="login-button" value="login" />
            <input className="button__item button__item--black" type="submit" name="sign-button" id="sign-button" value="sign up" />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;
