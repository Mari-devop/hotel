import {put, takeEvery} from "redux-saga/effects";

export function* workerSaga(){

}

function* watchChangeText (action){
    console.log("rChange")
    yield put({type: "SAVE_Data", payload: action.payload})
}

export function* watchClickSaga(){

}


export default function* rootSaga() {
    console.log("rootSaga")
    yield takeEvery("CHANGE_TEXT", watchChangeText)
   
}