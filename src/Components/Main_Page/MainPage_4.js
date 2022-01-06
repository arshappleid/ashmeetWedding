import React, { Component } from 'react'

const main_img_4 =
	"https://images.unsplash.com/photo-1534504700761-50a76b48a245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80";

class Main4 extends Component{
	render() {
		return (
			<div>
				<img className="background_image_card" src={main_img_4} />
				<h3 className="background_image_font">
					
					<p>Wedding</p>
					<p>at</p>
					<p>Palace</p>
					<p>Baraat at 11 am</p>
					<p></p>
					 <br className="clear" />
				</h3>
						
			</div>
		)
	}
}

export default Main4