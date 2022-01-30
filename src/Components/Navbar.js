
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return <div class = "cursive">
			<nav>
				<ul>
					<div className="flex justify-center space-x-5">
						<li><Link to="/">Invite</Link></li>
						<li><Link to="/RequestImages">Photos</Link></li>
					</div>	
				</ul>
				</nav>
		</div>
	}
}

export default Navbar