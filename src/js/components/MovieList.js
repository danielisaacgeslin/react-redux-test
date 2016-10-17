import React from "react";

export default class MovieList extends React.Component{
  constructor(props){
    super(props);
  }

  onAddMovie(){
    const id = Math.round(Math.random() * 1000);
    this.props.onAddMovie({
      id: id,
      title: 'movie title',
      url: id > 500 ? 'https://www.youtube.com/embed/GNWYNK0MVrU' : 'https://www.youtube.com/embed/J7E_Z_QsO-0'
    });
  }

  render(){
    const items = this.props.movies.map((movie, index)=>{
      return (
        <a className="movie-item" key={movie.id} onClick={()=>this.props.onSelectMovie(movie)}>
          <span>{index + 1} {movie.title} {movie.id}</span>
        </a>
      );
    });
    return (
      <div className="movieList">
        <a className="btn btn-primary " onClick={this.onAddMovie.bind(this)}>add movie</a>
        {items}
      </div>
    );
  }
}
