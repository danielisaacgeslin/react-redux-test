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
      youtubeId: id > 500 ? 'GNWYNK0MVrU' : 'J7E_Z_QsO-0'
    });
  }

  render(){
    const items = this.props.movies.map((movie, index)=>{
      return (
        <a className="movie-item" key={index} onClick={()=>this.props.onSelectMovie(movie)}>
          <span>{index + 1}. {movie.title}</span>
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
