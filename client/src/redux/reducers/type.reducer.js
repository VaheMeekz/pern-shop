import {GET_TYPES} from "../actions/type.action";

const initialState = {
    types:[]
}


export const typeReducer = (state= initialState, action) => {
    switch (action.type){
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        default:
            return state
    }
}