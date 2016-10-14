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
