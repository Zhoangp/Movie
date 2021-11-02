import React, { useEffect } from "react";
import Carousel from "./carousel/Carousel";
import { useDispatch, useSelector} from "react-redux";
import ListFilm from "./ListFilm/ListFilm";
import { getFilmAction, getFilmTrending } from "../../redux/actions/filmAction";
import { actionTypes } from "../../redux/actions/types";
import axios from 'axios'

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilmAction(1));
    dispatch(getFilmTrending())
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
