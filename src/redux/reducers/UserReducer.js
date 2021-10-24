import { actionTypes } from "../actions/types"

const initial = {
    infor: null
}
const UserReducer = (state = initial, action) => {
    switch(action.type) {
        case actionTypes.GET_USER: {
            state.infor = action.payload;
            console.log(state.infor);
            return {...state}
        }
        default: 
            return {...state}
    }
}
export default UserReducer