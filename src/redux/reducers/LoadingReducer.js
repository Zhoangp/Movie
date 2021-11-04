import { actionTypes } from "../actions/types"

const load = {
    isLoading: false
}
const LoadingReducer = (state = load, action) => {
    switch (action.type) {
        case actionTypes.LOADING_ON: 
            state.isLoading = true;
            return {...state}
        case actionTypes.LOADING_OFF:
            state.isLoading = false;
            return {...state}
        default:
            return {...state}
    }
}
export default LoadingReducer;