import React, { Fragment } from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { booking } from '../../../redux/actions/booking';
import { actionTypes } from '../../../redux/actions/types';
import '../listOfSeats.css'
const Index = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const params = useParams()
    const user = useSelector(state => state.UserReducer.infor)
    const { infor, listSeatsBooking, total} = useSelector(state => state.SeatsReducer);
    const list = {
        maLichChieu: null,
        danhSachVe: [],
        taiKhoanNguoiDung: null
}
    list.maLichChieu = Number(params.id)
    list.danhSachVe = [...listSeatsBooking]
    if(user)
        list.taiKhoanNguoiDung = user.taiKhoan
    return (
        <div className="seats__right">
        {infor ?
        <Fragment>
        
        <Typography variant="h4" component="h4">{infor.tenCumRap}</Typography>
        <Typography variant="h6" component="h5">Địa điểm: <span>{infor.diaChi}</span> - <span>{infor.tenRap}</span></Typography>
        <Typography variant="h6" component="h5">Ngày chiếu: <span>{infor.ngayChieu}</span></Typography>
        <hr />
        <Typography className="total__seats" variant="h5" component="h4">
            <span>Ghế </span>
            <div>
                { 
                listSeatsBooking.map(item => {
                    return   <Button 
                    onClick={() => {
                        dispatch({type: actionTypes.ADD_SEATS, payload: {item, params }})
                    }} className="seats-selected list__seats__booked" variant="contained">
                        {item.tenGhe}
                    </Button>
                })}
                </div>
            </Typography>
            <hr />

            <Typography variant="h4" component="h1">{total}VND</Typography>
            </Fragment>
            : <Fragment></Fragment>
        }
         <Button onClick={() => {
            dispatch(booking(list))
         }} className="button-book">
             BOOK
        </Button>
            
        </div>
    );
};

export default Index;