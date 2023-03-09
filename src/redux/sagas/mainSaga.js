import { all, call } from "redux-saga/effects";
import usersSaga from './usersSaga'
import roomSaga from './roomSaga'


const mainSaga = [usersSaga , roomSaga];

export default function* watchrootSaga() {
  
  yield all(mainSaga.map(s => call(s)));
   
}