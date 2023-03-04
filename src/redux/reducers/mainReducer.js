import { combineReducers } from 'redux';
import userAct from "./userReducer"

const reducer = combineReducers({
    users: userAct, 
    //rooms: hjk
});

export default reducer;