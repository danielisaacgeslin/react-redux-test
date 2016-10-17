export function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    payload: movie
  };
}

export function selectMovie(movie){
  return {
    type: 'SELECT_MOVIE',
    payload: movie
  };
}

export function fetchMovies(){
  return {
    type: 'FETCH_MOVIES',
    payload: null
  }
}

export function fetchMoviesSuccess(movies){
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies
  }
}
