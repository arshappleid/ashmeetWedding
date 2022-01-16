import React, { Component } from 'react'
import { displayImgs } from './aws_images/import.js';


class Images extends Component{
	
	render() {
		return (
			<div className="flex space-x-5 justify-center">
				<h3>Images</h3>
				{displayImgs()}
				
			</div>
		)
	}

	
}

export default Images