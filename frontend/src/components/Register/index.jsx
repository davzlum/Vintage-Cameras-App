import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/actionCreatorsUser';

function Register() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    city: '',
    cp: '',
    phone: 0,
    password: '',
    favorites: [],
    cart: [],
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    dispatch(signup(data));
  };

  return (
    <>
      <h1>Register</h1>
      <form className="form-container" onSubmit={sendData}>
        <p>(*) is required</p>
        <div className="form-floating">
          <label htmlFor="name">
            <p>Name: *</p>
            <input type="text" placeholder="Insert name" name="name" required onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="username">
            <p>Username: *</p>
            <input type="text" placeholder="Insert username" name="username" required onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="email">
            <p>Email: *</p>
            <input type="email" placeholder="Insert email" name="email" required onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="password">
            <p>Password: *</p>
            <input type="password" placeholder="Insert password" name="password" minLength="6" required onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="phone">
            <p>Phone:</p>
            <input type="tel" placeholder="Insert phone" name="phone" onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="address">
            <p>Address:</p>
            <input type="text" placeholder="Insert address" name="address" onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="city">
            <p>City:</p>
            <input type="text" placeholder="Insert city" name="city" onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="postal">
            <p>P.C.:</p>
            <input type="number" placeholder="Insert postal code" name="cp" maxLength="5" onChange={handleInputChange} />
          </label>
        </div>
        <div className="button">
          <input className="button__item button__item--black" type="submit" name="sign-button" id="sign-button" value="sign up" />
        </div>
      </form>
      <ul>
        <li>{data.name}</li>
        <li>{data.address}</li>
      </ul>
    </>
  );
}

export default Register;
