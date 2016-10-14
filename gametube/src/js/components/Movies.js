import React from "react";
import { connect } from 'react-redux';
import * as movieActions from '../actions/movieActions';
import MovieList from './MovieList';

class Movies extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
        <MovieList movies={this.props.movies} onAddMovie={this.props.onAddMovie.bind(this)}></MovieList>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return {movies: state.movies};
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onAddMovie: (movie) => dispatch(movieActions.addMovie(movie))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
