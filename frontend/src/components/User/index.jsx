import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, useHistory,
} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logout } from '../../redux/actions/actionCreatorsUser';
import EditUser from './EditUser';
import './user.scss';
import EditLogo from '../../assets/edit-regular.svg';
import CloseEdition from '../../assets/times-circle-solid.svg';

export default function User() {
  const history = useHistory();
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [state, setState] = useState(true);

  const logMeOutNotification = () => {
    confirmAlert({
      title: 'See you soon!',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(logout(user));
            const path = '/login';
            history.push(path);
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <>
      <div className="user-container">
        <h1>
          My profile
        </h1>
        {state
          ? (
            <>
              <p className="user-container__item">
                Name:
                {' '}
                <span>{user?.name}</span>
              </p>
              <p className="user-container__item">
                Username:
                {' '}
                <span>{user?.username}</span>
              </p>
              <p className="user-container__item">
                Address:
                {' '}
                <span>{user?.address}</span>
              </p>
              <p className="user-container__item">
                City:
                {' '}
                <span>{user?.city}</span>
              </p>
              <p className="user-container__item">
                Postal Code:
                {' '}
                <span>{user?.cp}</span>
              </p>
              <p className="user-container__item">
                Phone:
                {' '}
                <span>{user?.phone}</span>
              </p>
              <p className="user-container__item">
                Email:
                {' '}
                <span>{user?.email}</span>
              </p>
              <button className="button button__modify" type="button" onClick={() => setState(!state)}><img src={EditLogo} alt="edition" /></button>
            </>
          )
          : (
            <>
              <EditUser onAction={() => setState(!state)} />
              <button className="button button__cancel" type="button" onClick={() => setState(!state)}><img src={CloseEdition} alt="closeEdition" /></button>
            </>
          )}
        <ul className="nav-user">
          <li className="nav-user__item"><Link to="/favorites">My FAVORITES</Link></li>
          <li className="nav-user__item"><Link to="/cart">My CART</Link></li>
          <li className="nav-user__button"><button className="button-logout" type="button" onClick={logMeOutNotification}>Logout</button></li>
        </ul>
      </div>
    </>
  );
}
