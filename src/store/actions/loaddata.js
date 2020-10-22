import axios from 'axios'
import constants from '../constants/loaddata'



export const loadData = () => async (dispatch) => {
    const { data } = await axios.get(`https://reqres.in/api/products/3`)
    dispatch({ type: constants.LOAD_DATA, data })
}

