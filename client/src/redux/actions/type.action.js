import axios from 'axios'

export const GET_TYPES = 'GET_TYPES'

export const getItemsThunk = () => {
    return async dispatch => {
        const response = await axios.get('')
        dispatch({
            type: GET_TYPES,
            payload: response.data
        })
    }
}