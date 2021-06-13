import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { signup } from '../../redux/actions/actionCreatorsUser';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './register.scss';

function Register() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const [userData, setUserData] = useState({
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
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  if (user === 'Signup successful') {
    confirmAlert({
      title: 'Register completed',
      message: 'Login with your email and password',
      buttons: [
        {
          label: 'Ok',
          onClick: () => {
            const path = '/login';
            history.push(path);
          },
        },
      ],
    });
  }

  const sendData = (event) => {
    event.preventDefault();
    dispatch(signup(userData));
  };

  return (
    <>
      <form className="form-container" onSubmit={sendData}>
        <h1>Register</h1>
        <p className="info-required">(*) is required</p>
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
        <div className="button-container">
          <input className="button button__submit" type="submit" name="sign-button" id="sign-button" value="sign up" />
          <button className="button button__cancel" type="button"><Link to="/login">Cancel</Link></button>
        </div>
      </form>
    </>
  );
}

export default Register;
