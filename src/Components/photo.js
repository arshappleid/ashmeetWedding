import React, { Component } from 'react'

class photo extends Component{
	render() {
		const post = this.props.post;
		return <figure className="figure">
			<img src={post.imageLink} alt={post.description} />
			<figcaption><p>{post.description}</p></figcaption>
			<button>Remove</button>
		</figure>
	}
}

export default photo