import React, { Component } from 'react'

const main_img_3 =
	"https://www.esamskriti.com/essays/docfile/3_4924.jpg";

class Main3 extends Component{
	render() {
		return (
			<div className = "eventbox">
				<div className = "eventTitle">Mehndi</div>
				<img className="background_image_card" src={main_img_3} width = "100%" />
				<h3>
					<ul>
					<li>Sunday February 13, 2022</li>
						<li>Venue : <a href="https://www.google.com/maps/dir//Lake+Club,+Uttar+Marg,+Near+Sukhna+Lake,+Sector+1,+Chandigarh,+160001,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390fed475a61e033:0xa9e6f029451748e?sa=X&ved=2ahUKEwjvmoHC-571AhVIg3IEHS55Cc8Q48ADegQIAhA-">Sukhna Lake, Chandigarh.</a> </li>
					</ul>
					 <br className="clear" />
				</h3>
			</div>
		)
	}
}

export default Main3