import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/actions/actionCreatorsUser';
import SaveEdition from '../../../assets/check-circle-solid.svg';

// eslint-disable-next-line react/prop-types
export default function EditUser({ onAction }) {
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
    event.preventDefault();
    const newData = { ...user.user, ...userData };
    dispatch(updateUser(newData));
    onAction();
  };

  return (
    <>
      <form>
        <div className="user-container__item">
          <label htmlFor="name">
            <p>
              Name:
              {' '}
              <input type="text" placeholder="Insert name" name="name" required onChange={handleInputChange} value={userData.name} />
            </p>

          </label>
        </div>
        <div className="user-container__item">
          <label htmlFor="username">
            <p>
              Username:
              {' '}
              <input type="text" placeholder="Insert username" name="username" required onChange={handleInputChange} value={userData.username} />
            </p>

          </label>
        </div>
        <div className="user-container__item">
          <label htmlFor="address">
            <p>
              Address:
              {' '}
              <input type="text" placeholder="Insert address" name="address" onChange={handleInputChange} value={userData.address} />
            </p>

          </label>
        </div>
        <div className="user-container__item">
          <label htmlFor="city">
            <p>
              City:
              {' '}
              <input type="text" placeholder="Insert city" name="city" onChange={handleInputChange} value={userData.city} />
            </p>

          </label>
        </div>
        <div className="user-container__item">
          <label htmlFor="postal">
            <p>
              Postal Code:
              {' '}
              <input type="number" placeholder="Insert postal code" name="cp" maxLength="5" onChange={handleInputChange} value={userData.cp} />
            </p>

          </label>
        </div>
        <div className="user-container__item">
          <label htmlFor="phone">
            <p>
              Phone:
              {' '}
              <input type="tel" placeholder="Insert phone" name="phone" onChange={handleInputChange} value={userData.phone} />
            </p>

          </label>
        </div>
        <div className="user-container__item">
          <label htmlFor="email">
            <p>
              Email:
              {' '}
              <input type="email" placeholder="Insert email" name="email" required onChange={handleInputChange} value={userData.email} />
            </p>

          </label>
        </div>
        <button data-testid="button-submit" onClick={sendData} className="button button__submit" type="button" name="sign-button" id="sign-button" value="Update">
          <img src={SaveEdition} alt="saveEdition" />
        </button>
      </form>
    </>
  );
}
