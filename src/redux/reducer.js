import {combineReducers} from 'redux'
import { FETCHED_TRIPS, FETCHED_CATEGORIES, LOG_IN, ADDED_TRIP_EVENT } from './actions.js'

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
		case ADDED_TRIP_EVENT:
			const trip = oldState.find(trip => trip.id === action.payload.trip_id)
			trip.event_timeline.push(action.payload)
			return [...oldState.filter(trip => trip.id !== action.payload.trip_id), trip]
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