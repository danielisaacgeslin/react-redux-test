import React from "react";
import { Link } from 'react-router';

export default class Header extends React.Component {

	render() {
		return (
      <div>
  			<header>
					header
					<Link to="Movies" >go to movies</Link>
				</header>
      </div>
		);
	}

}
