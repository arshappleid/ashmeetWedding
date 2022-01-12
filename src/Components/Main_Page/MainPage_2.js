import React, { Component } from 'react'

const main2_img = "https://m.media-amazon.com/images/I/51PnA8x4NvL.jpg"

class Main2 extends Component{
	render() {
		return (
			<div className = "eventbox">
				<div className = "eventTitle">Ladies Sangeet</div>
				<img className="background_image_card" src={main2_img} width = "100%" />
				<h3>
					<ul>
					<li>Saturday February 12, 2022</li>
						<li>Venue : <a href="https://www.google.com/maps/dir//SS+farms+chandigarh/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390fef9c7a8771a7:0x76de7914f5ebb7b6?sa=X&ved=2ahUKEwjNmsWg-p71AhUTmXIEHbSmAIgQ9Rd6BAhFEAQ">SS Farms.</a> </li>
					</ul>
					 <br className="clear" />
				</h3>
	
			</div>
		)
	}
}

export default Main2