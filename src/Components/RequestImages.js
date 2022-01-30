
import React, { Component } from 'react'



class Main extends Component {
	render() {
		return <div>
			<h4>Since this feature is only available to Apple users, enter your apple id and your name.</h4>
			<form>
				<label for="name">Name :</label>
				<input type="text" name="name"></input>

				<br/>
				
				<label for="appleid">Name :</label>
				<input type="text" name="appleid"></input>
					
				<br/>
				<button type = "submit">Request Access</button>
			</form>
		</div>
	}
}

export default Main