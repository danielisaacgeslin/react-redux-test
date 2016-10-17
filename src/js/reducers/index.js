import { combineReducers } from 'redux';
import { movies, selectedMovie} from './movies.reducer';

const reducers = combineReducers({
  movies,
  selectedMovie
});

export default reducers;
