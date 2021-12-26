import {GET_ITEMS} from "../actions/item.action";

const initialState = {
    items:[]
}


export const itemReducer = (state= initialState, action) => {
    switch (action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}