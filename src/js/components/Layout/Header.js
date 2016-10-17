import React from "react";
import { Link } from 'react-router';

export default class Header extends React.Component {

	render() {
		return (
  			<header className="bg-primary">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<Link className="link" to="Movies">Movies</Link>
								<Link className="link" to="Contact">Contact</Link>
							</div>
						</div>
					</div>
				</header>
		);
	}

}
