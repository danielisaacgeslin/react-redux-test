import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import axios from 'axios';

function* fetchMoviesAsync(){
  const response = yield call(()=>axios.get('/movies.json'));
  yield put({type: 'FETCH_MOVIES_SUCCESS', payload: response.data.movies});
  if(response.data.movies.length){
    yield put({type: 'SELECT_MOVIE', payload: response.data.movies[0]});
  }
}

export function* fetchMovies(){
  yield* takeLatest('FETCH_MOVIES', fetchMoviesAsync);
}
