import { SHOW_NOTIFICATION, LOGOUT_SUCCESS } from "../actions/usersActions";
import { CLEAR_NOTIFICATION } from "../actions/notifAction"

const initialState = { status: "", message: "", isShow: false};

export default function notifReducer (state = initialState, {type, payload}){
    switch (type) {
        case SHOW_NOTIFICATION:
            return payload;
        case CLEAR_NOTIFICATION:
        case LOGOUT_SUCCESS:
            return initialState;
        default:
            return state;
        
    }

}