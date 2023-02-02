import {takeEvery, call, put} from 'redux-saga/effects';
import AxiosService from '../../../networks/AxiosService';
import {ApiUrls} from '../../../networks/ApiUrls';
import {getMovieList, movieListSuccess, movieListFailure} from '../../reducer/movielist'
import {movieDetailSuccess, movieDetailFailure, getMovieDetail} from '../../reducer/moviedetail'

function* movieListApi(action) {
    try {
        const response = yield call(AxiosService.getServiceData, ApiUrls.MOVIE_LIST, action.payload.page);
        const result = response.data;
        yield put(movieListSuccess(result));
    } catch (error) {
        yield put(movieListFailure());
    }
}




function* movieDetailApi(action) {
    try {
        const response = yield call(AxiosService.getServiceData, ApiUrls.MOVIE_DETAIL(action.payload.movieId), {});
        const result = response.data;
        yield put(movieDetailSuccess(result));
    } catch (error) {
        yield put(movieDetailFailure());
    }
}



const combineSagas = [takeEvery(getMovieList.type, movieListApi), takeEvery(getMovieDetail.type, movieDetailApi)];
export default combineSagas