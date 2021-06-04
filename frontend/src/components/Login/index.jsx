import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import logo from '../../assets/logo.svg';
import login from '../../redux/actions/actionCreatorsUser';
import './login.scss';

function Login({ dispatch }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="login">
      <div className="login-information">
        <img src={logo} alt="logotipe" />
        <form action="/login" method="POST">
          <div className="form-floating">
            <label htmlFor="email">
              <span>Email</span>
              <input onChange={handleEmail} className="form-control" type="text" placeholder="email" id="email" name="email" />
            </label>
          </div>
          <div className="form-floating">
            <label htmlFor="password">
              <span>Password</span>
              <input onChange={handlePassword} className="form-control" type="password" placeholder="password" id="password" name="password" />
            </label>
          </div>
          <div className="button">
            <input onClick={dispatch(login(email, password))} className="button__item" type="submit" name="login-button" id="login-button" value="login" />
            <input className="button__item button__item--black" type="submit" name="sign-button" id="sign-button" value="sign up" />
          </div>

        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Login;
