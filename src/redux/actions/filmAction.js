import axios from "axios";
import { DOMAIN } from "../../settings/config";

export const getFilmAction = (pageNumber) => {
    return async (dispatch) => {
        try {
          const result = await axios({
            url: `${DOMAIN}movie/popular?api_key=17d2b8ee0ce95cae017c6fe95cfcaa6b&language=en-US&page=${pageNumber}`,
            method: "GET"
          });
          dispatch({type: 'GET_FILM', payload: result.data })
    
        } catch(error) {
          console.log(error);
        }
        }
}