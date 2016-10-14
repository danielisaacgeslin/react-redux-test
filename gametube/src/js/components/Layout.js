import React from "react";
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import {Link} from 'react-router';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Link to="Movies" >go to movies</Link>
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
