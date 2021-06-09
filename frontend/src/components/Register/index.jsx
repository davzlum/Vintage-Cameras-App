import React from 'react';

function Register() {
  return (
    <>
      <form className="form-container">
        <div className="form-floating">
          <label htmlFor="name">
            <span>Name: *</span>
            <input type="text" placeholder="Insert name" required />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="username">
            <span>Username: *</span>
            <input type="text" placeholder="Insert username" required />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="email">
            <span>Email: *</span>
            <input type="email" placeholder="Insert email" required />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="password">
            <span>Password: *</span>
            <input type="password" placeholder="Insert password" minLength="6" required />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="phone">
            <span>Phone:</span>
            <input type="tel" placeholder="Insert phone" />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="address">
            <span>Address:</span>
            <input type="text" placeholder="Insert address" />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="city">
            <span>City:</span>
            <input type="text" placeholder="Insert city" />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="postal">
            <span>P.C.:</span>
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
