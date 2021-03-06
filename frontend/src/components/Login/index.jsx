import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { login } from '../../redux/actions/actionCreatorsUser';
import './login.scss';

function Login({ dispatch, user }) {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function userLogin(event) {
    event.preventDefault();
    dispatch(login(email, password));
  }
  const handleRegistration = () => {
    const path = '/register';
    history.push(path);
  };
  if (user.token) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <div className="login-information">
        <img src={logo} alt="logotipe" />
        <form action="/cameras" method="POST">
          <div className="form-floating">
            <label htmlFor="email">
              <span>Email</span>
              <input onChange={handleEmail} className="form-control" type="text" placeholder="email" id="email" name="email" defaultValue={email} />
            </label>
          </div>
          <div className="form-floating">
            <label htmlFor="password">
              <span>Password</span>
              <input onChange={handlePassword} className="form-control" type="password" placeholder="password" id="password" name="password" defaultValue={password} />
            </label>
          </div>
          <div className="button">
            <button data-testid="login-button" onClick={userLogin} className="button__item" type="submit" name="login-button" id="login-button">Login</button>
            <input onClick={handleRegistration} className="button__item button__item--black" type="submit" name="sign-button" id="sign-button" value="sign up" />
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Login);
