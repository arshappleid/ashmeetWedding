import React, { Component } from 'react'
import wedding from "../images/wedding.jpg";

const background_image_1 =
	"https://images.unsplash.com/photo-1579532649461-b2c6edf65546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";



class Main1 extends Component{
	render() {
		return (
			<div className = "eventbox">
				<div className = "eventTitle">Wedding</div>
				<img className="background_image_card" src={wedding} width = "100%" />
				<h3>
					<ul>
					<li>Monday February 14, 2022 </li>
						<li>Venue : <a href="https://www.google.com/maps/place/The+Hermitage/@30.8014429,76.8125475,17z/data=!3m1!4b1!4m5!3m4!1s0x390ff313f80fc649:0x1fbd3fd57eb2af46!8m2!3d30.8014429!4d76.8147362">The Hermitage Farms.</a> </li>
					</ul>
					 <br className="clear" />
				</h3>
			</div>
		)
	}

	
}

export default Main1