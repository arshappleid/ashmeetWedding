import React, { Component } from 'react'

const main_img_3 =
	"https://images.unsplash.com/photo-1579532649461-b2c6edf65546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

class Main3 extends Component{
	render() {
		return (
			<div>
				<img className="background_image_card" src={main_img_3} />
				<h3 className="background_image_font">
					
					<p>Wedding</p>
					<p>at</p>
					<a href="https://www.google.com/maps/place/The+Hermitage/@30.8014429,76.8125475,17z/data=!3m1!4b1!4m5!3m4!1s0x390ff313f80fc649:0x1fbd3fd57eb2af46!8m2!3d30.8014429!4d76.8147362"><p>Hermitage Palace</p></a>
					<p>Baraat at 11 am</p>
					 <br className="clear" />
				</h3>
						
			</div>
		)
	}
}

export default Main3