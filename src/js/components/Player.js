import React from "react";

export default class Player extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.selectedMovie || !this.props.selectedMovie.id){
      return null;
    }
    return (
      <div className="player">
        <h1>{this.props.selectedMovie.id} {this.props.selectedMovie.title}</h1>
        <iframe src={this.props.selectedMovie.url} frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
}
