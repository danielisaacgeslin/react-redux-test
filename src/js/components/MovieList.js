import React from "react";

export default class MovieList extends React.Component{
  constructor(props){
    super(props);
  }

  onAddMovie(){
    this.props.onAddMovie({
      id: Math.random() * 1000,
      title: 'lalala',
      url: 'asdasd.com'
    });
  }

  render(){
    const items = this.props.movies.map((movie)=>{
      return (
        <a className="movie-item" key={movie.id} onClick={()=>this.props.onSelectMovie(movie)}>
          <span>{movie.id} {movie.title} {movie.url}</span>
        </a>
      );
    });
    return (
      <div className="movieList">
        <a onClick={this.onAddMovie.bind(this)}>add movie</a>
        {items}
      </div>
    );
  }
}
