import React from "react";
import { connect } from 'react-redux';
import * as movieActions from '../actions/movies.actions';
import MovieList from './MovieList';
import Player from './Player';

class Movies extends React.Component {
	constructor(props){
		super(props);
		if(!this.props.movies.length){
			this.fetchMovies();
		}
	}

	fetchMovies(){
		this.props.fetchMovies();
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-12 col-md-2">
	        <MovieList
					movies={this.props.movies}
					onAddMovie={this.props.onAddMovie.bind(this)}
					onSelectMovie={this.props.onSelectMovie.bind(this)}
					></MovieList>
				</div>
				<div className="col-xs-12 col-md-10">
					<Player
					selectedMovie={this.props.selectedMovie}></Player>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return {movies: state.movies, selectedMovie: state.selectedMovie};
}

const mapDispatchToProps = (dispatch) =>{
	return {
		fetchMovies: () => dispatch(movieActions.fetchMovies()),
		onAddMovie: (movie) => dispatch(movieActions.addMovie(movie)),
		onSelectMovie: (movie) => dispatch(movieActions.selectMovie(movie))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
