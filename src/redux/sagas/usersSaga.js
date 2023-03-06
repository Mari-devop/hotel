import { takeEvery, put } from 'redux-saga/effects';
import { LOGIN, loginSuccess, getAccountsSuccess, showNotification, GET_ACCOUNTS  } from './usersActions';

//Create a function for retrieving data for accounts 
//from Firebase using accountsRef.once ('value').
function* getAccounts() {
  try {
    const snapshot = yield accountsRef.once("value");
    const accounts = snapshot.val();
    yield put(getAccountsSuccess(accounts));
  } catch (error) {
    yield put(showNotification(error.message));
  }
}

export function* watchUsersAccountSaga() {
  yield takeEvery(GET_ACCOUNTS, getAccounts);
}


function* userLogIn(action) {
  const { username, password } = action.payload;

    if (username === 'valid_username' && password === 'valid_password') {
        const user = { id: 1, username: 'valid_username' };
        yield put(loginSuccess(user));
    } else {
        const error = 'Invalid username or password';
        yield put(Error(error));
    }
}

export default function* watchUsersSaga() {
  yield takeEvery(LOGIN, userLogIn);
}
