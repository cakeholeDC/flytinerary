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
			let fetchedTrips = action.payload.sort((a, b) => a.start > b.start ? 1 : -1)
			return fetchedTrips
		case NEW_TRIP:
			const newTrip = action.payload
			let newTrips = [...oldState, newTrip].sort((a, b) => a.start > b.start ? 1 : -1)
			return newTrips
		case UPDATE_TRIP:
			const updated_trip = action.payload
			let revisedTrips = [...oldState.filter(trip => trip.id !== action.payload.id), updated_trip].sort((a, b) => a.start > b.start ? 1 : -1)
			return revisedTrips
		case ADDED_TRIP_EVENT:
			const findTrip = oldState.find(trip => trip.id === action.payload.trip_id)
			findTrip.event_timeline.push(action.payload)
			let modifiedTrips = [...oldState.filter(trip => trip.id !== action.payload.trip_id), findTrip].sort((a, b) => a.start > b.start ? 1 : -1)
			return modifiedTrips
		default:
			let defaultTrips = oldState.sort((a, b) => a.start > b.start ? 1 : -1)
			return defaultTrips
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