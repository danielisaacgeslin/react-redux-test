export default function movies(state = [], action = {}){
  switch (action.type) {
    case 'ADD_MOVIE':
      return [].concat(state).concat({
        id: action.payload.id,
        title: action.payload.title,
        url: action.payload.url
      });
    default:
      return state;
  }
}
