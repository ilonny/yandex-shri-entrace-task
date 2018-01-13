import React, { Component } from 'react'
// import { connect } from 'react-redux'
import HeaderComponent from 'components/HeaderComponent'
import MainPage from 'containers/pages/main/MainPage'
// import EditPage from 'containers/EditPage'
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'
class IndexContainer extends Component {
	render() {
		return ( 
			<div id="container">
				<HeaderComponent/>
				<Router>
					<div>
						<Route exact path="/" component={MainPage} />
						{/* <Route path="/edit" component={EditPage} /> */}
					</div>
				</Router>
			</div>
		)
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 	}
// }
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)
export default IndexContainer