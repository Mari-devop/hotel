import { GET_ROOMS_SUCCESS} from '../actions/roomsActions';

const initialState = {
  rooms: []
};

const roomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROOMS_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default roomsReducer;