import { actionTypes } from "../actions/types";

const initial = {
    listFilmTrending: []
}
const FilmTrendingReducer = (state = initial, action) => {
        switch(action.type) {
            case actionTypes.GET_FILM_TRENDING:
                state.listFilmTrending = action.payload.results
                return {...state}
        
        default: 
            return {...state}
        }
}
export default FilmTrendingReducer;