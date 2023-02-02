import {combineReducers} from 'redux';
import movieListReducer from './movielist';
import movieDetailReducer from "./moviedetail";


export default combineReducers({
    movieListReducer,
    movieDetailReducer,
});