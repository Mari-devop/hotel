import { combineReducers } from 'redux';
import usersReducer from './userReducer';

const reducer = combineReducers({
    users: usersReducer, 
    
});

export default reducer;