
export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';



export const getRooms = () => ({
  type: GET_ROOMS,
});

export const getRoomsSuccess = (dataRooms) => ({
  type: GET_ROOMS_SUCCESS,
  payload: dataRooms,
});


