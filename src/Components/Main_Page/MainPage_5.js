import React, { Component } from 'react'

const main_img_5 =
	"https://images.unsplash.com/photo-1617611392752-fc419caffff7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80";

class Main5 extends Component{
	render() {
		return (
			<div>
				<img className="background_image_card" src={main_img_5} />
				<h3 className="background_image_font">
					<p>Wedding</p>
					<p>at</p>
					<p>Palace</p>
					<p>Baraat at 11 am</p>
					 <br className="clear" />
				</h3>
						
			</div>
		)
	}
}

export default Main5