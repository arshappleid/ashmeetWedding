import React, { Component } from 'react'
import Countdown from './Countdown'

class Header extends Component {
	render() {
		return (
			<div className="topheader" id="topHeader">
				<div>
					<h2>Ashmeet Gill weds Parampal Sandhu</h2>
					<Countdown />
				</div>
			</div>
		)
	}
}
 
export default Header