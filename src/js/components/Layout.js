import React from "react";
import Header from './Layout/Header';
import Footer from './Layout/Footer';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}
