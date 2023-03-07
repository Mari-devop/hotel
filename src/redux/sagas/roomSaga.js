import { takeEvery, put } from 'redux-saga/effects';
import { GET_ROOMS, getRoomsSuccess, showNotification } from '../actions/roomsActions';
import { collection } from "firebase/firestore";
import {db, getDocs} from "../firebase";


function* getRooms() {
  try {
    const querySnapshot = yield (getDocs(collection(db, "rooms")));
     let rooms = []
    
     querySnapshot.forEach((doc) => {
        rooms.push({...doc.data(), id: doc.id})
        });
        console.log("rooms: ", rooms);
    yield put(getRoomsSuccess(rooms));
    yield put(showNotification('Rooms data retrieved successfully'));
  } catch (error) {
    yield put(showNotification(`Error retrieving rooms data: ${error.message}`));
  }
}

export default function* watchRoomsSaga() {
  yield takeEvery(GET_ROOMS, getRooms);
}




