import React from 'react';
import logo from '../../assets/logo.svg';

function Login() {
  return (
    <>
      <img src={logo} alt="logotipe" />
      <form action="/login" method="POST">
        <div className="form-floating">
          <label htmlFor="email">
            Email
            <p><input className="form-control" type="text" placeholder="email" id="email" name="email" /></p>
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="password">
            Password
            <p><input className="form-control" type="password" placeholder="password" id="password" name="password" /></p>
          </label>
        </div>
        <input className="w-100 btn btn-lg btn-primary" type="submit" name="login-button" id="login-button" value="login" />
      </form>
    </>
  );
}

export default Login;
