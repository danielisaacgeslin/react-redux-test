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
    console.log(this.props.movies);
    const items = this.props.movies.map((movie)=>{
      return (
        <div key={movie.id}>
          <p>{movie.id} {movie.title} {movie.url}</p>
        </div>
      );
    });
    return (
      <div>
        <a onClick={this.onAddMovie.bind(this)}>add movie</a>
        {items}
      </div>
    );
  }
}
