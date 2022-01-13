
import React, { Component } from 'react'




class ContactMe extends Component {
	render() {
		return <div className="" >
			<form>
				<h3>Prabhmeet Singh Deol</h3>
					<label for="name">Name:</label>
					<input type="text" id="fname" name="fname" />
					<p></p>
					<label for="lname">Email:</label>
					<input type="text" id="lname" name="lname" />
				<p></p>
					<label for="message">Message:</label>
					<input type="text" id="message" name="message" size = "50" width="100%"  height="100px" margin = "0% 5%"/><br/><br/>
				<button type="button" id="Send">Send</button>


				<p className="content-center"><a href="arsh.appleid@gmail.com">My Email</a></p>
			</form>
		</div>
	}
}

export default ContactMe;