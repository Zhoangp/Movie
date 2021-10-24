import axios from 'axios'
import {actionTypes} from './types'

export const logIn = (values, callBack) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                method: "POST",
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                data: values
            })
            dispatch({type: actionTypes.GET_USER, payload: result.data})
            callBack();
        }
        catch(error) {
            alert("Tai khoan hoac mat khau cua ban chua chinh xac")
        }
    }
}