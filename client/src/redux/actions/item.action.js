import axios from 'axios'

export const GET_ITEMS = 'GET_ITEMS'

export const getItemsThunk = () => {
    return async dispatch => {
        const response = await axios.get('')
        dispatch({
            type: GET_ITEMS,
            payload: response.data
        })
    }
}