import React, { Component } from 'react'

const background_image_1 =
	"https://images.unsplash.com/photo-1579532649461-b2c6edf65546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const main2_img = "https://images.unsplash.com/photo-1612619732932-ea0a16a7af82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"

class Main1 extends Component{
	render() {
		return (
			<div>
				
				<img className="background_image_card" src={background_image_1} height = "110%" />
					<h3 className="background_image_font">
					<p>Ashmeet Gill</p>
					<p>Weds</p>
					<p>Param Sandhu</p>
					<p>February 14,2022</p>
					 <br className="clear" />
				</h3>
	
			</div>
		)
	}
}

export default Main1