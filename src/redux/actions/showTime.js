import axios from "axios"
import { actionTypes } from "./types"

export const getShowTime = (id) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=2603`,
                method: 'GET'
            })
            dispatch({type: actionTypes.GET_SHOWTIME, payload: result.data.heThongRapChieu})
        }
        catch(err) {
            alert(err);
        }
    } 
} 