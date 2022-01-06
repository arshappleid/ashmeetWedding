import React, { Component } from 'react'
import photo from './photo'


class photoWall extends Component{
	render() {
		return (
			<div className ="photoGrid">
				{this.props.posts.map((post, index) => <photo key={ index} post={ post }/>)}
			</div>
		)
	}
}

export default photoWall