export function movies(state = [], action = {}){
  switch (action.type) {
    case 'ADD_MOVIE':
      return state.concat({
        id: action.payload.id,
        title: action.payload.title,
        url: action.payload.url
      });
    default:
      return state;
  }
}

export function selectedMovie(state = {}, action = {}){
  switch (action.type) {
    case 'SELECT_MOVIE':
      return action.payload;
    default:
      return state;
  }
}
