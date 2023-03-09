import { GET_ACCOUNTS_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../actions/usersActions';

const initialState = {
  accounts: {},
  userAuth: {
    isAuth: false,
    userName: '',
  }
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNTS_SUCCESS:
      return { ...state, accounts: {...state.accounts, ...payload}, };
    case LOGIN_SUCCESS:
      return {...state, userAuth: {...state.userAuth, isAuth:true, ...payload}, };
    case LOGOUT_SUCCESS:
      return {...state, userAuth: { isAuth: false, userName: ''}, };
 
    default:
      return state;
  }
};

export default usersReducer;

