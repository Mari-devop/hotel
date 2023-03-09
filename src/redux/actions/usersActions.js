export const GET_ACCOUNTS = "get_accounts";
export const GET_ACCOUNTS_SUCCESS = "get_accounts_success";
export const SHOW_NOTIFICATION = "show_notification";
export const LOGIN = "login";
export const LOGIN_SUCCESS = "login_success";
export const LOGOUT = "logout";
export const LOGOUT_SUCCESS = "logout_success"


export const getAccounts = () => ({
  type: GET_ACCOUNTS
});

export const getAccountsSuccess = (dataAccounts) => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: dataAccounts,
});

export const showNotification = (error) => ({
  type: SHOW_NOTIFICATION,
  payload: error,
});

export const login = (dataUser) => ({
  type: LOGIN,
  payload: dataUser
});

export const loginSuccess = (dataUser) => ({
  type: LOGIN_SUCCESS,
  payload: dataUser
});

export const logout = () => ({
  type: LOGOUT
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});