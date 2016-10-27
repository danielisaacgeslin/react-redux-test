import React from "react";

export default class Player extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.selectedMovie || !this.props.selectedMovie.id){
      return null;
    }
    const id = 'https://www.youtube.com/embed/'.concat(this.props.selectedMovie.youtubeId);
    const movieId = this.props.selectedMovie.id;
    const title = this.props.selectedMovie.title;
    return (
      <div className="player">
        <h1>{movieId} {title}</h1>
        <iframe src={id} frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
}
