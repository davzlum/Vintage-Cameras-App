import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
import { updateUser } from '../../../redux/actions/actionCreatorsUser';

export default function EditUser() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user.user.name,
    username: user.user.username,
    email: user.user.email,
    address: user.user.address,
    city: user.user.city,
    cp: user.user.cp,
    phone: user.user.phone,
    password: user.user.password,
    favorites: user.user.favorites,
    cart: user.user.cart,
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    // eslint-disable-next-line no-debugger
    debugger;
    event.preventDefault();
    const newData = { ...user.user, userData };
    dispatch(updateUser(newData));
  };

  return (
    <>
      <form onSubmit={sendData}>
        <div className="form-floating">
          <label htmlFor="name">
            <p>
              Name:
              {' '}
              <input type="text" placeholder="Insert name" name="name" required onChange={handleInputChange} value={userData.name} />
            </p>

          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="username">
            <p>
              Username:
              {' '}
              <input type="text" placeholder="Insert username" name="username" required onChange={handleInputChange} value={userData.username} />
            </p>

          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="address">
            <p>
              Address:
              {' '}
              <input type="text" placeholder="Insert address" name="address" onChange={handleInputChange} value={userData.address} />
            </p>

          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="city">
            <p>
              City:
              {' '}
              <input type="text" placeholder="Insert city" name="city" onChange={handleInputChange} value={userData.city} />
            </p>

          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="postal">
            <p>
              Postal Code:
              {' '}
              <input type="number" placeholder="Insert postal code" name="cp" maxLength="5" onChange={handleInputChange} value={userData.cp} />
            </p>

          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="phone">
            <p>
              Phone:
              {' '}
              <input type="tel" placeholder="Insert phone" name="phone" onChange={handleInputChange} value={userData.phone} />
            </p>

          </label>
        </div>
        <div className="form-floating">
          <label htmlFor="email">
            <p>
              Email:
              {' '}
              <input type="email" placeholder="Insert email" name="email" required onChange={handleInputChange} value={userData.email} />
            </p>

          </label>
        </div>
        <div className="button">
          <input className="button-submit" type="submit" name="sign-button" id="sign-button" value="Update" />
        </div>
      </form>
    </>
  );
}
