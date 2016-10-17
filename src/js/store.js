import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fetchMovies } from './sagas/movies.sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {
  movies: [],
  selectedMovie: {},
  contactData: {}
}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchMovies);

export default store;
