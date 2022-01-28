import React, { Component } from 'react'
import Countdown from "./Countdown";

class Header extends Component {
	render() {
		return (
			<div class="topheader " id="topHeader">
				<div class = "block space-y-0">
					<h2>Ashmeet Gill weds Parampal Sandhu</h2>
					<Countdown />
				</div>
			</div>
		)
	}
}
 
export default Header