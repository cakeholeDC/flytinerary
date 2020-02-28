import {combineReducers} from 'redux'
import { FETCHED_TRIPS, LOG_IN } from './actions.js'

function userReducer(oldState = null, action) {
	switch (action.type){
		case LOG_IN:
			return action.payload
		default:
			return oldState
	}
}

function tripReducer(oldState = [], action){
	switch (action.type){
		case FETCHED_TRIPS:
			return action.payload
		default:
			return oldState
	}
}

// function progressReducer(oldState='home', action){
// 	switch (action.type){
// 		case PROGRESS:
// 			return action.payload
// 		default:
// 			return oldState
// 	}
// }


// function dietReducer(oldState=[], action){
// 	switch (action.type){
// 		case FETCHED_DIETS:
// 			return action.payload
// 		default:
// 			return oldState
// 	}
// }
// function cuisinesReducer(oldState=[], action){
// 	switch (action.type){
// 		case FETCHED_CUISINES:
// 			return action.payload
// 		default:
// 			return oldState
// 	}
// }
// function coursesReducer(oldState=[], action){
// 	switch (action.type){
// 		case FETCHED_COURSES:
// 			return action.payload
// 		default:
// 			return oldState
// 	}
// }

// function matchReducer(oldState = [], action){
// 	switch (action.type){
// 		case USER_MATCHES:
// 			return action.payload
// 		default:
// 			return oldState
// 	}
// }



const rootReducer = combineReducers({
	currentUser: userReducer,
	trips: tripReducer
})

export default rootReducer