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

const rootReducer = combineReducers({
	currentUser: userReducer,
	trips: tripReducer
})

export default rootReducer