import axios from "axios";
import { DOMAIN, KEY } from "../../settings/config";
import { actionTypes } from "./types";


export const getFilmAction = (pageNumber) => {
    return async (dispatch) => {
        try {
          const result = await axios({
            url: `${DOMAIN}movie/popular?api_key=${KEY}&language=en-US&page=${pageNumber}`,
            method: "GET"
          });
          dispatch({type: actionTypes.GET_FILM, payload: result.data })
    
        } catch(error) {
          console.log(error);
        }
        }
}
export const getFilmTrending = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}trending/all/day?api_key=${KEY}`,
        method :"GET"
      })
      dispatch({type: actionTypes.GET_FILM_TRENDING, payload: result.data})
    }
    catch(error) {
      alert("error roi")
    }
  }
}