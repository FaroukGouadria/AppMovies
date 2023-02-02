import {Constants} from "../appconstants/AppConstants";

const BASE_URL = 'https://api.themoviedb.org/3/';
const MOVIE_LIST = `movie/now_playing?api_key=${Constants.API_KEY}`;
const MOVIE = 'https://api.themoviedb.org/3/movie';
const MOVIE_DETAIL = (movieId) => `movie/${movieId}?api_key=${Constants.API_KEY}`
export const ApiUrls = {
    BASE_URL,
    MOVIE_LIST,
    MOVIE_DETAIL,
    MOVIE
};