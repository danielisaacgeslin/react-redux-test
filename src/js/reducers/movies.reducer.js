export function movies(state = [], action = {}){
  switch (action.type) {
    case 'ADD_MOVIE':
      return state.concat({
        id: action.payload.id,
        title: action.payload.title,
        youtubeId: action.payload.youtubeId
      });
      break;
    case 'FETCH_MOVIES_SUCCESS':
      return action.payload
      break;
    default:
      return state;
  }
}

export function selectedMovie(state = {}, action = {}){
  switch (action.type) {
    case 'SELECT_MOVIE':
      return action.payload;
      break;
    default:
      return state;
  }
}
