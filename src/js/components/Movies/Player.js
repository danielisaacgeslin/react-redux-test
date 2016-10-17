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
    return (
      <div className="player">
        <h1>{this.props.selectedMovie.id} {this.props.selectedMovie.title}</h1>
        <iframe src={id} frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
}
