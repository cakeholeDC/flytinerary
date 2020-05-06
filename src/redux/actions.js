export const FETCHED_TRIPS = "FETCHED_TRIPS"
// export const FETCHED_TRAVELERS = "FETCHED_TRAVELERS"
export const LOG_IN = "LOG_IN"

// const PROD_URL = "https://flytinerary-api.herokuapp.com"
const DEV_URL = "http://localhost:3000"

// let BASE_URL = PROD_URL
let BASE_URL = DEV_URL

const TRIPS_URL = `${BASE_URL}/trips`
const TRAVELERS_URL = `${BASE_URL}/travelers`
// const EVENTS_URL = `${BASE_URL}/events`
const API_LOGIN = `${BASE_URL}/api/v1/login` 

export function fetchingTrips(){
	return (dispatch) => {
		fetch(TRIPS_URL)
	      .then(res => res.json())
	      .then(trips_array => {
	      	dispatch(fetchedTrips(trips_array))
	      })
	}
}

export function fetchedTrips(trips_array){
	return { type: FETCHED_TRIPS, payload: trips_array }
}

// export function fetchingTravelers(){
// 	return (dispatch) => {
// 		fetch(TRAVELERS_URL)
// 	      .then(res => res.json())
// 	      .then(travelers_array => {
// 	      	dispatch(fetchedTravelers(travelers_array))
// 	      })
// 	}
// }

// export function fetchedTravelers(travelers_array){
// 	return { type: FETCHED_TRAVELERS, payload: travelers_array }
// }

export function fetchingUser(){
	// return dispatch() => {
	// 	fetch(API_LOGIN)
	// }
	return true
}

export function setCurrentUser(user){
	return {type: LOG_IN, payload: user}
}
