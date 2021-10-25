import React, { useEffect } from "react";
import Carousel from "./carousel/Carousel";
import { useDispatch} from "react-redux";
import ListFilm from "./ListFilm/ListFilm";
import { getFilmAction, getFilmTrending } from "../../redux/actions/filmAction";
import { actionTypes } from "../../redux/actions/types";
import axios from 'axios'

const Home = (props) => {
  
  const dispatch = useDispatch();
  const getCredentialFromLocal = () => {
    const credentialsStr = localStorage.getItem("credentials");
    if(credentialsStr) {
      dispatch({type: actionTypes.GET_USER, payload: JSON.parse(credentialsStr)})
    }
  }
  useEffect(() => {
    dispatch(getFilmAction(1));
    dispatch(getFilmTrending())
    getCredentialFromLocal();
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
