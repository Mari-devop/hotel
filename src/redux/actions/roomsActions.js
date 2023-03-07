
export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';


export const getRooms = () => ({
  type: GET_ROOMS,
});

export const getRoomsSuccess = (data) => ({
  type: GET_ROOMS_SUCCESS,
  payload: data,
});

export const showNotification = (message) => ({
  type: SHOW_NOTIFICATION,
  payload: message,
});
