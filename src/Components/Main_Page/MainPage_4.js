import React, { Component } from 'react'
import mapico from "../images/google_map.png"
import main_img_4 from "../images/mehndi.jpg"



const add = "https://www.google.com/maps/place/The+Hermitage/@30.8014429,76.8125475,17z/data=!3m1!4b1!4m5!3m4!1s0x390ff313f80fc649:0x1fbd3fd57eb2af46!8m2!3d30.8014429!4d76.8147362";

const name = "To be announced.";


class Main4 extends Component{
	render() {
		return (
			<div className = "eventbox">
				<div className = "eventTitle">Shagun</div>
				<img className="background_image_card" src={main_img_4} width = "100%" />
				<h3>
					<ul>
					<li>Friday February 11, 2022</li>
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

export default Main4