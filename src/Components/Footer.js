import React, { Component } from 'react'
let insta = "https://www.instagram.com/deol.z/"

class Footer extends Component{
	render() {
		return (
			<div>
				<br/>
				<p class = "footer">Created with ♥ by <a href = {insta}>Prabhmeet Singh Deol </a>  and Special Thanks to Aviraj Singh Gill.</p>
			</div>
		)
	}

	
}

export default Footer