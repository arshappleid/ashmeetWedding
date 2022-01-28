import React, { Component } from 'react'
let insta = "https://www.instagram.com/deol.z/"
let insta2 = "https://www.instagram.com/aviraj.singh.gill/"

class Footer extends Component{
	render() {
		return (
			<div>
				<br/>
				<p className = "footer">Created with ♥ by <a href = {insta}>Prabhmeet Singh Deol </a>, and Special Thanks to the creative director <a href = {insta2}>Aviraj Singh Gill.</a></p>
			</div>
		)
	}

	
}

export default Footer