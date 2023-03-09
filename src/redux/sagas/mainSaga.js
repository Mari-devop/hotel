import { all, call } from "redux-saga/effects";
import watchUsersSaga from "./usersSaga";
import watchRoomsSaga from "./roomSaga";

const mainSaga = [watchRoomsSaga];

export default function* watchrootSaga() {
  yield all(mainSaga.map((s) => call(s)));
}
