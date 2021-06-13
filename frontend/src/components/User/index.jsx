import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logout } from '../../redux/actions/actionCreatorsUser';

export default function User() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logMeOutNotification = () => {
    confirmAlert({
      title: 'See you soon!',
      message: 'Are you sure you want to logout',
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
        {user.user.name}
        {' '}
        profile
      </h1>
      <ul>
        <li>Modify data</li>
        <li><Link to="/favorites">My favorite products</Link></li>
        <li><button type="button" onClick={logMeOutNotification}>Logout</button></li>
      </ul>
    </>
  );
}
