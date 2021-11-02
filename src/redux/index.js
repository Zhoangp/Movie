import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import FilmReducer from './reducers/FilmReducer'
import UserReducer from './reducers/UserReducer'
import FilmTrendingReducer from './reducers/FilmTrendingReducer'
import ShowTimeReducer from './reducers/ShowTimeReducer'
import SeatsReducer from './reducers/SeatsReducer'
const rootReducer = combineReducers({FilmReducer, UserReducer, FilmTrendingReducer, ShowTimeReducer, SeatsReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk))
