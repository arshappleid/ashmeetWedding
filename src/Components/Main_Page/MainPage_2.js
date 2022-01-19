import React, { Component } from 'react';
import mapico from "../images/google_map.png";

const main2_img = "https://m.media-amazon.com/images/I/51PnA8x4NvL.jpg"
const add = "https://www.google.com/maps/dir//SS+farms+chandigarh/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390fef9c7a8771a7:0x76de7914f5ebb7b6?sa=X&ved=2ahUKEwjNmsWg-p71AhUTmXIEHbSmAIgQ9Rd6BAhFEAQ";
const name = "S.S Farms"

class Main2 extends Component{
	render() {
		return (
			<div className = "eventbox">
				<div className = "eventTitle">Ladies Sangeet</div>
				<img className="background_image_card" src={main2_img} width = "100%" />
				<h3>
					<ul>
					<li>Saturday February 12, 2022</li>
						<li className="flex justify-center">Venue : <a href={add}><button class="googlebutton">
							<img src={mapico} alt = "Map" className = "icon"/>
							<span class="text-lg mx-4x">{name}</span>
						</button></a> </li>
					</ul>
					
				</h3>
	
			</div>
		)
	}
}

export default Main2