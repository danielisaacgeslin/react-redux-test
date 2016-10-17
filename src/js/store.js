import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, {
  movies: [{id:1, title: 'test movie', url: 'asd.com'}],
  selectedMovie: {}
});

export default store;
