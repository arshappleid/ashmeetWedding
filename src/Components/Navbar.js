
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from './Main_Page/Countdown';

class Navbar extends Component {
	render() {
		return <div background-color="#c85d6d">
			<nav>
				<ul>
					<div className="justify-end flex space-x-5">
						<div class = "justify-end">
							<li><Countdown /></li>
						</div>
						<div class = "justify-end">
						<div class = "flex space-x-5 order-last">
							<li><Link to="/Main">Home</Link></li>
							<li><Link to="/SpecialThanks">Special Thanks</Link></li>
							<li><Link to="/ContactMe">Contact Me</Link></li>
							<li><Link to="/Images">Aws Images</Link></li>
						</div>
						</div>
					</div>	
				</ul>
				</nav>
		</div>
	}
}

export default Navbar