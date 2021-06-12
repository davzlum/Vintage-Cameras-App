import actionTypes from '../actions/actionTypes';

function usersReducer(user = {}, action) {
  if (action.type === actionTypes.LOGIN) {
    return action.user;
  } if (action.type === actionTypes.LOGOUT) {
    return action.user;
  }
  return user;
}

export default usersReducer;
