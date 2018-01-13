import constants from 'constants'
// import { toggleExpandedForAll } from 'constants/tree-data-utils'
// import axios from 'axios'
const unitReducer = function (
	state = {
		preloading: false,
		units: [],
		dataTree: [],
		userPreloading: false,
		users: [],
	}, action) {  
	switch(action.type) {
		case constants.START_LOAD_UNITS:
			console.log('START_LOAD_UNITS dispatched')				
			return { ...state, preloading: true }
		case constants.SUCCESS_LOAD_UNITS:
			console.log('SUCCESS_LOAD_UNITS dispatched')				
			console.log(action)
			return { ...state, preloading: false, units: action.units }
		case constants.ERROR_LOAD_UNITS:
			console.log('ERROR_LOAD_UNITS dispatched')
			console.log(action)
			return state



		case constants.START_GET_INIT_TREE:
			console.log('START_GET_INIT_TREE dispatched')
			console.log(action)
			return state
		case constants.SUCCESS_GET_INIT_TREE:
			console.log('SUCCESS_GET_INIT_TREE dispatched')
			console.log(action)			
			return { ...state, dataTree: action.units}
		case constants.ERROR_GET_INIT_TREE:
			console.log('ERROR_GET_INIT_TREE dispatched')
			console.log(action)
			return state
		
		case constants.START_GET_USERS_FROM_UNIT:
			console.log('START_GET_USERS_FROM_UNIT dispatched')
			console.log(action)
			return { ...state, userPreloading: true, users: [] }
		case constants.SUCCESS_GET_USERS_FROM_UNIT:
			console.log('SUCCESS_GET_USERS_FROM_UNIT dispatched')
			console.log(action)
			return { ...state, userPreloading: false, users: action.users }
		case constants.ERROR_GET_USERS_FROM_UNIT:
			console.log('ERROR_GET_USERS_FROM_UNIT dispatched')
			console.log(action)
			return { ...state, userPreloading: false }

		case constants.START_CHANGE_TREE:
			console.log('START_CHANGE_TREE dispatched')
			console.log(action)
			return { ...state, dataTree: action.treeData}
		default:
			return state
	}
}

export default unitReducer