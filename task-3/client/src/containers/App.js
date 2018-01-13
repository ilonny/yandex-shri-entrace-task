import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store'
import IndexContainer from 'containers/IndexContainer'


const store = configureStore();
export default class App extends Component {
	render() {
		return (
			<Provider key={ module.hot ? Date.now() : store} store={store}>
				<IndexContainer/>
			</Provider>
		)
	}
}