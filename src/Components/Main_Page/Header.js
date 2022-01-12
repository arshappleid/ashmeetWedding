import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<div class="topheader " id="topHeader">
				<div class = "flex space-x-4">
					<img src = "./../images/wedding.jpg" className="rounded-full w-16 h-32"/>
					<h2>Ashmeet Gill weds Parampal Sandhu</h2>
					<img src = "./../images/wedding.jpg" className="rounded-full w-16 h-32"/>
				</div>
			</div>
		)
	}
}

export default Header