import axios from "axios"
import { actionTypes } from "./types"

export const getSeatsAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
                method: 'GET'
            })
            dispatch({type: actionTypes.GET_SEATS, payload: result.data})
        }
        catch(err) {
            alert(err)
        }
    }
}