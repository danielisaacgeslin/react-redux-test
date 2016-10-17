import React from "react";

export default class MovieList extends React.Component{
  constructor(props){
    super(props);
  }

  onAddMovie(){
    this.props.onAddMovie({
      id: Math.round(Math.random() * 1000),
      title: 'movie title',
      url: 'https://www.youtube.com/embed/GNWYNK0MVrU'
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
