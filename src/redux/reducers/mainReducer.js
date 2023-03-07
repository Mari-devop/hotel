import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import roomsReducer from './roomsReducer'

const reducer = combineReducers({
    users: usersReducer, 
    rooms: roomsReducer,
    
});

export default reducer;