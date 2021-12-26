import {GET_AUT, GET_AUTH} from "../actions/auth.action";

const initialState = {
    isAuth:false,
    isAut:''
}


export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case GET_AUT:
            return {
                ...state,
                isAut:action.payload
            }
        default:
            return state
    }
}