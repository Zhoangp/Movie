import React, { useEffect } from "react";
import SeatsRight from "./listOfSeatsRight";
import SeatsLeft from "./listOfSeatsLeft"
import "./listOfSeats.css";
import Loading from "../../templates/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { actionTypes } from "../../redux/actions/types";
const Index = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const {clusterCode} = useSelector(state => state.SeatsReducer)
  useEffect(()=>{
    if(clusterCode !== params.id) {
      dispatch({type: actionTypes.BOOKING__COMPLETE})
    }
  }, [])
  return (
    <div className="cover__seats container">
      <Loading/>
      <SeatsLeft/>
      <SeatsRight />
    </div>
  );
};

export default Index;
