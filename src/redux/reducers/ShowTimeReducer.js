import { actionTypes } from "../actions/types"

const initial = {
    listShowTime: []
}
const ShowTimeReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOWTIME:
            state.listShowTime = action.payload;
            return {...state};
        default:
                return {...state}
    }
}
export default ShowTimeReducer;