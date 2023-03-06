import { LOGIN_SUCCESS, LOGOUT } from '../actions/usersActions';

const defaultState = {
  user: null,
  error: null
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default usersReducer;
