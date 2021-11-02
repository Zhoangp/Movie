import { actionTypes } from "../actions/types"

const initial = {
    listSeats: [],
    infor: null,
    listSeatsBooking: [],
    total: 0
}
const SeatsReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_SEATS: 
            state.listSeats = action.payload.danhSachGhe;
            state.infor = action.payload.thongTinPhim;
            return {...state}
        case actionTypes.ADD_SEATS: 
            const found = state.listSeatsBooking.findIndex((item) => {
                    return item.maGhe === action.payload.maGhe
            })
            if(found === -1) {
                state.listSeatsBooking = [action.payload, ...state.listSeatsBooking]
                state.total += action.payload.giaVe
            }
            else {
                state.total -= action.payload.giaVe
                state.listSeatsBooking.splice(found, 1);
            }
            
            return {...state}
        default: 
            return {...state}
    }
}
export default SeatsReducer;