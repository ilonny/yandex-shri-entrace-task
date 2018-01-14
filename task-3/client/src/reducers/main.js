import constants from 'constants'
import TimesArray from 'containers/pages/main/times.js'

let a = new Date;
let hours = a.getHours()-8;
let minutes = a.getMinutes();
let totalMinutes = hours*60 + minutes

const mainReducer = function (
	state = {
		dateNow: {
			date: Date.now(),
			offset: totalMinutes*1.083,
		},
		TimesArray: TimesArray,
	},
	action
) {  
	switch(action.type) {
		case constants.TEST_ACTION:
			console.log('TEST_ACTION dispatched')				
			return { ...state, test: true }
		default:
			return state
	}
}

export default mainReducer