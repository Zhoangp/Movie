import axios from "axios"
import { getSeatsAction } from "./seatAction"
import { actionTypes } from "./types"

export const booking = (listTickets) => {
    return async (dispatch) => {
        try {
            await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: listTickets,
                headers: {'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')}
            })
            dispatch({type: actionTypes.LOADING_ON})
            await dispatch(getSeatsAction(listTickets.maLichChieu))
            await dispatch({type: actionTypes.BOOKING__COMPLETE})
            dispatch({type: actionTypes.LOADING_OFF})
            alert('Tickets booking successful')
        }
        catch(err) {
            console.log(err)
        }
    }
}