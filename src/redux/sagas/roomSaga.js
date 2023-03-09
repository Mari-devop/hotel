import { takeEvery, put } from 'redux-saga/effects';
import { GET_ROOMS, showNotification, getRoomsSuccess } from '../actions/roomsActions';
import { collection,getDocs } from "firebase/firestore";
import {db} from "./../../firebase";


function* getRooms() {
  try {
    const querySnapshot = yield (getDocs(collection(db, "Rooms")));
     let rooms = []
    
     querySnapshot.forEach((doc) => {
        rooms.push({...doc.data(), id: doc.id})
        });
        console.log(rooms);
    yield put(getRoomsSuccess(rooms));
   
  } catch (error) {
    yield put(showNotification("Error retrieving rooms data"));
  }
}

export default function* watchRoomsSaga() {    
  yield takeEvery(GET_ROOMS, getRooms);
}

