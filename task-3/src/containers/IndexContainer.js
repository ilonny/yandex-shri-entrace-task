import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderComponent from 'components/HeaderComponent'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
class IndexContainer extends Component {
	render() {
		return ( 
			<div>
				<HeaderComponent/>
				
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