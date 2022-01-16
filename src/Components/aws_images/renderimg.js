import React, { Component } from 'react'

class showimg extends Component{
	render(url) {
		return (
			<div className="eventbox">
				<h2>Aviraj Singh Gill</h2>
				<img  src={url}/>
			</div>

		)
	}

	
}

export default showimg