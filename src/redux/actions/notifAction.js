export const SHOW_NOTIFICATION = "show_notification"
export const CLEAR_NOTIFICATION = "clear_notification"


export const showNotification = (status, message) => ({
    type: SHOW_NOTIFICATION,
    payload: { status, message, isShow: true },
  });

  export const clearNotification = () => ({
    type: CLEAR_NOTIFICATION
  });