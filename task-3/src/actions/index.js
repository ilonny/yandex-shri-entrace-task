import constants from 'constants'
import axios from 'axios'

////// action creators start //////

export const testAction = () => {
	return {
		type: constants.TEST_ACTION
	}
}

////// action creators end //////


//make chains with simple actions
export function testAsyncAction () {
	return dispatch => {
		dispatch(testAction())
		axios.post('/some-url/file.php')
		.then((response) => {
			// okay, dispatch success action
		})
		.catch((error) => {
			// error, dispatch error action
		})
	}
}