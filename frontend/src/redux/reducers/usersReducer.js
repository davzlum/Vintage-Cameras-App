import actionTypes from '../actions/actionTypes';

function usersReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return action.user;

    case actionTypes.LOGOUT:
      return action.user;

    case actionTypes.SIGN_UP:
      return action.user;

    case actionTypes.UPDATE_USER:
      return { ...user, user: { ...action.newUser } };

    default:
      return user;
  }
}

export default usersReducer;
