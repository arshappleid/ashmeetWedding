import React, { Component } from 'react'

const main2_img = "https://images.unsplash.com/photo-1612619732932-ea0a16a7af82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
class Main2 extends Component{
	render() {
		return (
			<div margin = "-10px">
				<img className="background_image_card" src={main2_img} margin = "1px"/>
				<h3 className="background_image_font">
					<p>Sangeet Night</p>
					<p>Feb 12 2022</p>
					<p>at</p>
						<p>Gill Family House</p>
						 <br className="clear" />
				</h3>
			</div>
		)
	}
}

export default Main2