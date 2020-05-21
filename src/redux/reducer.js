import {combineReducers} from 'redux'
import { FETCHED_TRIPS, FETCHED_CATEGORIES, LOG_IN, ADDED_TRIP_EVENT, NEW_TRIP, UPDATE_TRIP } from './actions.js'

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
		case NEW_TRIP:
			const newTrip = action.payload
			return [...oldState, newTrip]
		case UPDATE_TRIP:
			const updated_trip = action.payload
			return [...oldState.filter(trip => trip.id !== action.payload.id), updated_trip]		
		case ADDED_TRIP_EVENT:
			const findTrip = oldState.find(trip => trip.id === action.payload.trip_id)
			findTrip.event_timeline.push(action.payload)
			return [...oldState.filter(trip => trip.id !== action.payload.trip_id), findTrip]
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