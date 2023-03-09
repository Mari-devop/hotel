import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import roomsReducer from './roomsReducer'
import notifReducer from './notifReducer'

const mainReducer = combineReducers({
    users: usersReducer, 
    rooms: roomsReducer,
    notif: notifReducer,
});

export default mainReducer;