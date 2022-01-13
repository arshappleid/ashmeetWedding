
import React, { Component } from 'react'

let avi2 = "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241705902_552259886106751_1025202772042052604_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=7kIjXa6Aot4AX8iJQNs&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT_GCnnIBkti0QJFZhpcK7N7PJdjuHP6hCg6AYd6eDUWng&oe=61E6AEA8&_nc_sid=83d603";

let avi = "https://www.moonastro.com/babyname/baby%20Aviraj.jpg";
class SpecialThanks extends Component {
	render() {
		return <div background-color="#c85d6d">
			<h2>Special Thanks to All the Brothers. </h2>
			<div className="flex space-x-5 justify-center">
			<div className="eventbox">
				<h2>Aviraj Singh Gill</h2>
					<img  src={avi} />
				</div>

			<div className="eventbox">
				<h2>Aviraj Singh Gill</h2>
				<img  src={avi} />
				</div>

			<div className="eventbox">
				<h2>Aviraj Singh Gill</h2>
				<img  src={avi}/>
				</div>
			</div>
			<h2>Special Thanks to All the Sisters. </h2>
			<div className="flex space-x-5 justify-center">
			<div className="eventbox">
				<h2>Aviraj Singh Gill</h2>
					<img  src={avi} />
				</div>

			<div className="eventbox">
				<h2>Aviraj Singh Gill</h2>
				<img  src={avi} />
				</div>

			<div className="eventbox">
				<h2>Aviraj Singh Gill</h2>
				<img  src={avi}/>
				</div>
			</div>	
				
	</div>
	
	}
}

export default SpecialThanks;