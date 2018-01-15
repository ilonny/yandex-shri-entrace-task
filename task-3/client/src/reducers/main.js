import constants from 'constants'
import TimesArray from 'containers/pages/main/times.js'
import Rooms from 'reducers/rooms-mock'

let a = new Date;
let hours = a.getHours()-8;
let minutes = a.getMinutes();
let totalMinutes = hours*60 + minutes

const initialState = {
	dateNow: {
		date: Date.now(),
		offset: totalMinutes * 1.083,
	},
	TimesArray: TimesArray,
	chosenDate: Date.now(),
	rooms: Rooms,
}

const mainReducer = function (state = initialState, action) {  
	switch(action.type) {
		case constants.TEST_ACTION:
			console.log('TEST_ACTION dispatched')				
			return { ...state, test: true }
		case constants.CHOOSE_DATE:
			console.log('TEST_ACTION dispatched')
			return { ...state, chosenDate: parseInt(action.date) }
		default:
			return state
	}
}

export default mainReducer