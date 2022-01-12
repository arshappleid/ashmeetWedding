import React, { Component } from 'react'

const main_img_4 =
	"https://images.unsplash.com/photo-1534504700761-50a76b48a245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80";

class Main4 extends Component{
	render() {
		return (
			<div className = "eventbox">
				<div className = "eventTitle">Shagun</div>
				<img className="background_image_card" src={main_img_4} width = "100%" />
				<h3>
					<ul>
					<li>Friday February 11, 2022</li>
						<li>Venue : <a href="https://www.google.com/maps/place/The+Hermitage/@30.8014429,76.8125475,17z/data=!3m1!4b1!4m5!3m4!1s0x390ff313f80fc649:0x1fbd3fd57eb2af46!8m2!3d30.8014429!4d76.8147362">To be announced.</a> </li>

					</ul>
					 <br className="clear" />
				</h3>
	
			</div>
		)
	}
}

export default Main4