import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/actionCreatorsUser';

export default function User() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logMeOut = () => {
    dispatch(logout(user));
    const path = '/login';
    history.push(path);
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
        <li><button type="button" onClick={logMeOut}>Logout</button></li>
      </ul>
    </>
  );
}
