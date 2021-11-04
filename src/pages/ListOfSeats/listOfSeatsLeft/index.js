import { Button, Grid } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSeatsAction } from "../../../redux/actions/seatAction";
import { actionTypes } from "../../../redux/actions/types";
import Loading from "../../../templates/Loading/Loading";
import "../listOfSeats.css";

const Index = () => {
    const dispatch = useDispatch();
    const params = useParams();
    useEffect( async () => {
      dispatch({type: actionTypes.LOADING_ON})
      await dispatch(getSeatsAction(params.id));
      dispatch({type: actionTypes.LOADING_OFF})

    }, []);
    const { listSeats, listSeatsBooking } = useSelector(
      (state) => state.SeatsReducer
    );
    console.log(listSeats.length)
    return (
        <div className="seats__left">
        <Grid item container spacing={2}>
          { listSeats.length !== 0 ?
          listSeats.map((item, index) => {
            const classSeatVip =
              item.loaiGhe === "Vip" ? "seats-vip" : "seats-empty";
            const found = listSeatsBooking.findIndex((ghe) => {
              return item.maGhe === ghe.maGhe;
            });
            const classSeatBooked = found !== -1 ? "seats-selected" : "";
            return (
              <Fragment>
                <Grid key={index} item xs={2} sm={2} md={1} lg={1}>
                  <Button
                    onClick={() => {
                      dispatch({ type: actionTypes.ADD_SEATS, payload: {item, params} });
                    }}
                    disabled={item.daDat}
                    className={`${
                      item.daDat ? "seats-booked" : classSeatVip
                    }  ${classSeatBooked}`}
                    variant="contained"
                  >
                    {item.tenGhe}
                  </Button>
                </Grid>
              </Fragment>
            );
          }) : <h2>Sorry, there are no seats at the moment!</h2>
          
          }
        </Grid>
      </div>
    );
};

export default Index;