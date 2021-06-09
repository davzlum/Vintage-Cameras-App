import React from 'react';

function Register() {
  return (
    <>
      <h1>Register</h1>
      <form className="form-container">
        <p>(*) is required</p>
        <div className="form-floating">
          <label htmlFor="name">
            <p>Name: *</p>
            <input type="text" placeholder="Insert name" required />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="username">
            <p>Username: *</p>
            <input type="text" placeholder="Insert username" required />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="email">
            <p>Email: *</p>
            <input type="email" placeholder="Insert email" required />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="password">
            <p>Password: *</p>
            <input type="password" placeholder="Insert password" minLength="6" required />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="phone">
            <p>Phone:</p>
            <input type="tel" placeholder="Insert phone" />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="address">
            <p>Address:</p>
            <input type="text" placeholder="Insert address" />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="city">
            <p>City:</p>
            <input type="text" placeholder="Insert city" />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="postal">
            <p>P.C.:</p>
            <input type="number" placeholder="Insert postal code" maxLength="5" />
          </label>
        </div>
        <div className="button">
          <input className="button__item button__item--black" type="submit" name="sign-button" id="sign-button" value="sign up" />
        </div>
      </form>
    </>
  );
}

export default Register;
