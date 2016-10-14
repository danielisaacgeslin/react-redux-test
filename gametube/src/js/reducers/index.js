import { combineReducers } from 'redux';
import movies from './movies.reducer';

const reducers = combineReducers({
  movies
});

export default reducers;
