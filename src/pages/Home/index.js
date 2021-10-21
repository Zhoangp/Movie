import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import ListFilm from "./ListFilm/ListFilm";
import { getFilmAction } from "../../redux/actions/filmAction";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilmAction(1));
  }
,[])

  
  return (
    <div>
        <Carousel/>
        <ListFilm/>
    </div>
  );
};

export default Home;
