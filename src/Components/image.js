import React, { Component } from 'react'

class image extends Component{
	render() {
		return (
			<img src={require(this.props.address)} />
		)
	}
}

export default image