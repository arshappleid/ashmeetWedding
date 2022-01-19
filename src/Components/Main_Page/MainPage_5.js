import React, { Component } from 'react'
import mapico from "../images/google_map.png"

const main_img_5 =
	"https://images.unsplash.com/photo-1617611392752-fc419caffff7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80";

const add = "https://www.google.com/maps/place/The+Hermitage/@30.8014429,76.8125475,17z/data=!3m1!4b1!4m5!3m4!1s0x390ff313f80fc649:0x1fbd3fd57eb2af46!8m2!3d30.8014429!4d76.8147362";

const name = "Gill Home.";

class Main5 extends Component{
	render() {
		return (
			<div className = "eventbox">
				<div className = "eventTitle">Wedding Paath</div>
				<img className="background_image_card" src={main_img_5} width = "100%" />
				<h3>
					<ul>
					<li>February 10, 2022</li>
						<li className="flex justify-center">Venue : <a href={add}><button class="googlebutton">
							<img src={mapico} alt = "Map" className = "icon"/>
							<span class="text-lg mx-4x">{name}</span>
						</button></a> </li>

					</ul>
					 <br className="clear" />
				</h3>
	
			</div>
		)
	}
}

export default Main5