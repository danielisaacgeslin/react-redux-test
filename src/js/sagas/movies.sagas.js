import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import axios from 'axios';

function* fetchMoviesAsync(){
  const movies = yield call(()=>axios.get('/movies.json'));
  yield put({type: 'FETCH_MOVIES_SUCCESS', payload: movies.data.movies});
  if(movies.data.movies.length){
    yield put({type: 'SELECT_MOVIE', payload: movies.data.movies[0]});
  }
}

export function* fetchMovies(){
  yield* takeLatest('FETCH_MOVIES', fetchMoviesAsync);
}
