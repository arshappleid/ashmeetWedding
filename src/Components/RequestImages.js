import emailjs from 'emailjs-com';
import React, { Component, useEffect, useState } from 'react';


const RequestImages = () => {
	console.log("Email request sent.");
	function sendEmail(e) {
	e.preventDefault();
	emailjs
		.sendForm(
		"service_xfjnxta",
		"template_vudzfiu",
		e.target,
		"user_4WILhJ9RX1TndiyfLU0vH"
		).then((result) => {
		console.log(result);
		}).catch((err) => {console.log(err)});
	}	
	const [name, setName] = useState("");
	const [appleid, setAppleid] = useState("");
	return (
			<div className="justify-center text-center">
				<center>
				<h4>This feature is currently <u>only available to Apple users</u>, enter your apple id and your name.</h4>
				<div class="w-full max-w-xs text-center justify-center">
				<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 ml-4 mr-4 text-center justify-center">
				<div class="mb-4" id = "e">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
					Name
				</label>
				
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder="Name"></input>
				</div>
				<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
					Apple ID
				</label>
				<input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={appleid} onChange={(e) =>setAppleid(e.target.value)}type="text"></input>
				<p class="text-red-500 text-xs italic">Enter a valid email address.</p>
				</div>
				<div class="flex items-center justify-center">
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick= {sendEmail}>
					Request Access
				</button>
				</div>
			</form>
			<p class="text-center text-gray-500 text-xs">
			</p>
			</div>
			</center>
			</div>
		)
}

export default RequestImages