import React from "react";
import { connect } from 'react-redux';
import * as movieActions from '../actions/movieActions';
import MovieList from './MovieList';
import Player from './Player';

class Movies extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
        <MovieList
				movies={this.props.movies}
				onAddMovie={this.props.onAddMovie.bind(this)}
				onSelectMovie={this.props.onSelectMovie.bind(this)}
				></MovieList>
				<Player selectedMovie={this.props.selectedMovie}></Player>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return {movies: state.movies, selectedMovie: state.selectedMovie};
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onAddMovie: (movie) => dispatch(movieActions.addMovie(movie)),
		onSelectMovie: (movie) => dispatch(movieActions.selectMovie(movie))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
