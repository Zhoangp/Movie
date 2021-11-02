import axios from "axios"

export const booking = (listTickets) => {
    return async (dispatch) => {
        try {
            await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: listTickets,
                headers: {'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')}
            })
        }
        catch(err) {
            console.log(err)
        }
    }
}