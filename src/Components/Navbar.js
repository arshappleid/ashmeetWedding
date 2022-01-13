
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return <div background-color="#c85d6d">
			<nav>
				<ul>
					<div className="flex justify-center space-x-5">
						<li><Link to="/Main">Home</Link></li>
						<li><Link to="/SpecialThanks">Special Thanks</Link></li>
						<li><Link to="/ContactMe">Contact Me</Link></li>
					</div>	
				</ul>
				</nav>
		</div>
	}
}

export default Navbar