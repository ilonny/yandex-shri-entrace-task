import React, { Component } from 'react'
import { connect } from 'react-redux'

class IndexContainer extends Component {
	render() {
		let comp = (
			<div>
				test
			</div>
		)
		return ( 
			<div>
				{comp}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)