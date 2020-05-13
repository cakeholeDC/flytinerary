import {combineReducers} from 'redux'
import { FETCHED_TRIPS, FETCHED_CATEGORIES, LOG_IN } from './actions.js'

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

function categoryReducer(oldState = [], action){
	switch (action.type){
		case FETCHED_CATEGORIES:
			return action.payload
		default:
			return oldState
	}
}

const rootReducer = combineReducers({
	currentUser: userReducer,
	trips: tripReducer,
	categories: categoryReducer
})

export default rootReducer