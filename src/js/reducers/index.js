import { combineReducers } from 'redux';
import { movies, selectedMovie} from './movies.reducer';
import { contactData } from './contactData.reducer';

const reducers = combineReducers({
  movies,
  selectedMovie,
  contactData
});

export default reducers;
