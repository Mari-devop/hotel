// import { takeEvery, put, select, call } from "redux-saga/effects";
// import {
//   getAccountsSuccess,
//   showNotification,
//   GET_ACCOUNTS,
//   loginSuccess,
//   LOGIN,
//   LOGOUT,
//   logoutSuccess,
// } from "../actions/usersActions";
// import { collection } from "firebase/firestore";
// import { db } from "../../firebase";

// function* getAccounts() {
//   try {
//     const querySnapshot = yield getDocs(collection(db, "accounts"));

//     let accounts = [];
//     querySnapshot.forEach((doc) => {
//       accounts.push({ ...doc.data(), id: doc.id });
//     });
//     yield put(getAccountsSuccess(accounts));
//   } catch (error) {
//     yield put(showNotification("Account is not available"));
//   }
// }

// function* userLogin({ payload }) {
//   const { username, pass, remember } = payload;
//   const getAccountsState = (state) => state.users.accounts;
//   const accounts = yield select(getAccountsState);
//   const currentAccount = accounts[username];
//   const isValid = !!(currentAccount && currentAccount.password === pass);
//   if (isValid) {
//     yield put(loginSuccess({ username, image: currentAccount.image }));
//     if (remember) {
//       yield call(
//         [localStorage, "setItem"],
//         "authData",
//         JSON.stringify({ username, pass })
//       );
//     }
//   } else {
//     yield put(showNotification("Can't log in"));
//   }
// }

// function* userLogout() {
//   yield call([localStorage, "removeItem"], "authData");
//   yield put(logoutSuccess());
// }
// export default function* watchUsersSaga() {
//   yield takeEvery(GET_ACCOUNTS, getAccounts);
//   yield takeEvery(LOGIN, userLogin);
//   yield takeEvery(LOGOUT, userLogout);
// }
