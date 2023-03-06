export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const GET_ACCOUNTS_SUCCESS = "GET_ACCOUNTS_SUCCESS";
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";


export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const getAccounts = () => ({
  type: GET_ACCOUNTS,
});

export const getAccountsSuccess = (accounts) => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: accounts,
});

export const showNotification = (error) => ({
  type: SHOW_NOTIFICATION,
  payload: error,
});


export const login = (username, password) => ({
  type: LOGIN,
  payload: { username, password }
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const logout = () => ({
  type: LOGOUT
});
