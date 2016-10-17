import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, {
  movies: [{id:1, title: 'test movie', url: 'https://www.youtube.com/embed/GNWYNK0MVrU'}],
  selectedMovie: {}
});

export default store;
