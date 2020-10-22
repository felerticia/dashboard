import constants from '../constants/loaddata'

const initialState = {
   data: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOAD_DATA:
            return {
                ...state,
                data: action.data,
            }

        default:
            return state
    }
}

