import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import FilmReducer from './reducers/FilmReducer'
import UserReducer from './reducers/UserReducer'
import FilmTrendingReducer from './reducers/FilmTrendingReducer'
import ShowTimeReducer from './reducers/ShowTimeReducer'
const rootReducer = combineReducers({FilmReducer, UserReducer, FilmTrendingReducer, ShowTimeReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk))
