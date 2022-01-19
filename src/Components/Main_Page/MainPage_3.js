import React, { Component } from 'react'
import mapico from "../images/google_map.png"

const main_img_3 =
	"https://www.esamskriti.com/essays/docfile/3_4924.jpg";

const add = "https://www.google.com/maps/dir//Lake+Club,+Uttar+Marg,+Near+Sukhna+Lake,+Sector+1,+Chandigarh,+160001,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390fed475a61e033:0xa9e6f029451748e?sa=X&ved=2ahUKEwjvmoHC-571AhVIg3IEHS55Cc8Q48ADegQIAhA-";
const name = "Sukhna Lake, Chandigarh.";

class Main3 extends Component{
	render() {
		return (
			<div className = "eventbox">
				<div className = "eventTitle">Mehndi</div>
				<img className="background_image_card" src={main_img_3} width = "100%" />
				<h3>
					<ul>
					<li>Sunday February 13, 2022</li>
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

export default Main3