import { actionTypes } from '../actions/types'
const stateDefault = {
    listFilm: [],
    detailFilm: null,
    filmVideo: null
}
const FilmReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case  actionTypes.GET_FILM: {
            state.listFilm = action.payload.results;
            return {...state}
        }
        case actionTypes.GET_DETAIL: {
            state.detailFilm = action.payload;
            return {...state}
        }
        case actionTypes.GET_VIDEO: {
            state.filmVideo = action.payload.results[0];

            return {...state}
        }
        default:
            return {...state}
    }
}
export default FilmReducer