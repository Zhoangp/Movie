import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayFill } from "react-icons/bs";
import { Grid } from "@mui/material";
import Carousel from "./carousel/Carousel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ListFilm from "./ListFilm/ListFilm";

const Home = (props) => {
  
  const dispatch = useDispatch();
  useEffect(async () => {
      try {
        const result = await axios({
          url: "https://api.themoviedb.org/3/movie/popular?api_key=17d2b8ee0ce95cae017c6fe95cfcaa6b&language=en-US&page=1",
          method: "GET"
        })
        dispatch({type: 'GET_FILM', payload: result.data})
      } catch(error) {
        console.log(error);
      }
  },[])

  
  return (
    <div>
        <Carousel/>
        <ListFilm/>

    </div>
  );
};

export default Home;
