import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, useHistory,
} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logout } from '../../redux/actions/actionCreatorsUser';
import EditUser from './EditUser';

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
      <h1>
        {user.name}
        {' '}
        profile
      </h1>
      <ul>
        {state
          ? (
            <>
              <div>
                <p>
                  Username:
                  {' '}
                  {user.username}
                </p>
                <p>
                  Address:
                  {' '}
                  {user.address}
                </p>
                <p>
                  City:
                  {' '}
                  {user.city}
                </p>
                <p>
                  Postal Code:
                  {' '}
                  {user.cp}
                </p>
                <p>
                  Phone:
                  {' '}
                  {user.phone}
                </p>
                <p>
                  Email:
                  {' '}
                  {user.email}
                </p>
              </div>
              <button type="button" onClick={() => setState(!state)}>Modify data</button>
            </>
          )
          : (
            <>
              <EditUser />
              <button type="button" onClick={() => setState(!state)}>Go back</button>
            </>
          )}
        <li><Link to="/favorites">My favorite products</Link></li>
        <li><Link to="/cart">My cart</Link></li>
        <li><button type="button" onClick={logMeOutNotification}>Logout</button></li>
      </ul>
    </>
  );
}
