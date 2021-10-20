const stateDefault = {
    listFilm: []
}
const FilmReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'GET_FILM': {
            state.listFilm = action.payload.results;
            console.log(state.listFilm)
            return {...state}
        }
        default:
            return {...state}
    }
}
export default FilmReducer