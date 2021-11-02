import { Button, Grid, Typography } from '@mui/material';
import { typography } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { booking } from '../../redux/actions/booking';
import { getSeatsAction } from '../../redux/actions/seatAction';
import { actionTypes } from '../../redux/actions/types';
import './listOfSeats.css'
const Index = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const user = useSelector(state => state.UserReducer.infor)
    useEffect(() => {
        dispatch(getSeatsAction(params.id))
    }, [])
    const {listSeats, infor, listSeatsBooking, total} = useSelector(state => state.SeatsReducer);
    const list = {
        maLichChieu: null,
        danhSachVe: [],
        taiKhoanNguoiDung: null
}
    list.maLichChieu = Number(params.id)
    list.danhSachVe = [...listSeatsBooking]
    if(user)
        list.taiKhoanNguoiDung = user.taiKhoan
    console.log(user)
    return (
        <div className="cover__seats container">
        <div className="seats__left">
        <Grid item container spacing={2}>
            {listSeats.map((item, index) => {
                const classSeatVip = item.loaiGhe === 'Vip' ? 'seats-vip' : 'seats-empty'
                const found = listSeatsBooking.findIndex(ghe => {
                    return item.maGhe === ghe.maGhe
                })
                const classSeatBooked = found !== -1 ? 'seats-selected' : ''
                return <Fragment>
                        <Grid key={index} item xs={2} sm={2} md={1} lg={1}> 
                        <Button onClick={() => {
                            dispatch({type: actionTypes.ADD_SEATS, payload: item})
                        }} disabled={item.daDat} className={`${item.daDat ?"seats-booked" :  classSeatVip }  ${classSeatBooked}`} variant="contained">
                            {item.tenGhe}
                        </Button>
                        </Grid>
                 
                </Fragment>
            }) }
        </Grid>
        </div>
        <div className="seats__right">
        {infor ?
        
        <Fragment>
        <Typography variant="h2" component="h1">{total}</Typography>
        <hr />
        <Typography variant="h4" component="h4">{infor.tenCumRap}</Typography>
        <Typography variant="h6" component="h5">Địa điểm: <span>{infor.diaChi}</span> - <span>{infor.tenRap}</span></Typography>
        <Typography variant="h6" component="h5">Ngày chiếu: <span>{infor.ngayChieu}</span></Typography>
        <hr />

        <Typography className="total__seats" variant="h5" component="h4">
            <span>Ghế</span>
            <span>0</span>
            </Typography>
            </Fragment>
            : <Fragment></Fragment>
        }
         <Button onClick={() => {
            dispatch(booking(list))
         }} className="button-book">
             BOOK
        </Button>
            
        </div>

        </div>
    );
};

export default Index;