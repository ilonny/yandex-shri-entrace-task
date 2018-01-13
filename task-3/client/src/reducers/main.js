import constants from 'constants'

const mainReducer = function (state = {}, action) {  
	switch(action.type) {
		case constants.TEST_ACTION:
			console.log('TEST_ACTION dispatched')				
			return { ...state, test: true }
		default:
			return state
	}
}

export default mainReducer