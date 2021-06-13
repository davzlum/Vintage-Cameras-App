import actionTypes from '../actions/actionTypes';

function usersReducer(user = {}, action) {
  if (action.type === actionTypes.LOGIN) {
    return action.user;
  }
  if (action.type === actionTypes.LOGOUT) {
    // eslint-disable-next-line no-debugger
    debugger;
    return action.user;
  }
  if (action.type === actionTypes.SIGN_UP) {
    return action.user;
  }
  return user;
}

export default usersReducer;
