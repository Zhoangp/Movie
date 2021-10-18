import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import FilmReducer from './reducers/FilmReducer'
const rootReducer = combineReducers({FilmReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk))
