import { actionTypes } from "../actions/types"

const initial = {
    listSeats: [],
    infor: null,
    listSeatsBooking: [],
    total: 0,
    clusterCode: null
}
const SeatsReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_SEATS: 
            state.listSeats = action.payload.danhSachGhe;
            state.infor = action.payload.thongTinPhim;
            return {...state}
        case actionTypes.ADD_SEATS:
            if(state.clusterCode !== action.payload.params.id) {
                state.clusterCode = action.payload.params.id
            }
            const found = state.listSeatsBooking.findIndex((item) => {
                    return item.maGhe === action.payload.item.maGhe
            })
            if(found === -1) {
                state.listSeatsBooking = [action.payload.item, ...state.listSeatsBooking]
                state.total += action.payload.item.giaVe
            }
            else {
                state.total -= action.payload.item.giaVe
                state.listSeatsBooking.splice(found, 1);
            }            
            return {...state}
        case actionTypes.BOOKING__COMPLETE: 
            state.listSeatsBooking = []
            state.total = 0;
            return {...state}
        default: 
            return {...state}
    }
}
export default SeatsReducer;