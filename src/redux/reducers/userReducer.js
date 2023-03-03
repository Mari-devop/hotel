


const defaultState ={
    user: 0,
}

const userAct = (state = defaultState, action) =>{
    switch (action.type){
        case "SAVE_Data":
            return {user: action.payload}
        case "get_accounts":
            return {...state, user: state.user}
        case "get_accounts_success":
            return {...state, user: state.user + action.payload}
        case "Show_notification":
            return {...state, user: state.user }
        default:
            return state
    }
}

export default userAct;