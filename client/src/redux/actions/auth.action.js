import axios from "axios";

export const GET_AUTH = 'GET_AUTH'
export const GET_AUT = 'GET_AUT'

export const getAuthAC = (isAuth) =>{
    return {
        type:GET_AUTH,
        payload:isAuth
    }
}

export const getAuthThunk = () => {
    return async dispatch => {
        const response = await axios.get('')
        dispatch({
            type: GET_AUT,
            payload: response
        })
    }
}

