export const FETCHED_TRIPS = "FETCHED_TRIPS"
export const FETCHED_CATEGORIES = "FETCHED_CATEGORIES"
export const NEW_TRIP = "NEW_TRIP"
export const UPDATE_TRIP = "UPDATE_TRIP"
export const ADDED_TRIP_EVENT = "ADDED_TRIP_EVENT"
export const LOG_IN = "LOG_IN"

const DEV_URL = "http://localhost:3000"

// let BASE_URL = PROD_URL
let BASE_URL = DEV_URL

const TRIPS_URL = `${BASE_URL}/trips`
const USERS_URL = `${BASE_URL}/users`
const CATEGORIES_URL = `${BASE_URL}/categories`
const EVENTS_URL = `${BASE_URL}/events`

const API_LOGIN = `${BASE_URL}/api/v1/login` 
const API_TOKEN = `${BASE_URL}/api/v1/resolve` 


export function getTripsByUserID(id){
	return (dispatch) => {
		fetch(`${USERS_URL}/${id}/trips`)
	      .then(res => res.json())
	      .then(trips_array => {
	      	dispatch(storeTrips(trips_array))
	      })
	}
}

export function storeTrips(trips_array){
	return { type: FETCHED_TRIPS, payload: trips_array }
}

export function fetchEventCategories(){
	return (dispatch) => {
		fetch(CATEGORIES_URL)
	      .then(res => res.json())
	      .then(categories_array => {
	      	dispatch(storeCategories(categories_array))
	      })
	}
}

export function storeCategories(categoriesArray){
	return { type: FETCHED_CATEGORIES, payload: categoriesArray }
}

export function postNewTrip(tripObj){
	return (dispatch) => {
		const tripPost = {
			method: "POST",
			headers: {
				'Content-Type': "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify(tripObj)
		}

		fetch(TRIPS_URL, tripPost)
			.then(res => res.json())
			.then(trip => {
				dispatch(storeNewTrip(trip))
			})
	}
}

export function storeNewTrip(newTrip){
	return { type: NEW_TRIP, payload: newTrip }
}

export function patchTrip(tripObj){
	return (dispatch) => {
		const tripPatch = {
			method: "PATCH",
			headers: {
				'Content-Type': "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify(tripObj)
		}
		fetch(`${TRIPS_URL}/${tripObj.id}`, tripPatch)
			.then(res => res.json())
			.then(trip => {
				dispatch(storePatchedTrip(trip))
			})
	}
}

export function storePatchedTrip(patchedTrip){
	return { type: UPDATE_TRIP, payload: patchedTrip }
}

export function postNewEvent(eventObj){
	return (dispatch) => {
		const eventPost = {
			method: "POST",
			headers: {
				'Content-Type': "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify(eventObj)
		}

		fetch(EVENTS_URL, eventPost)
			.then(res => res.json())
			.then(event => {
				dispatch(storeNewEvent(event))
			})
	}
}

export function storeNewEvent(newEvent){
	return { type: ADDED_TRIP_EVENT, payload: newEvent }
}

export function handleLogIn(user){
	return (dispatch) => {
		const userConfig = {
			method: "POST",
			headers: {
				'Content-Type': "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify(user)
		}
		
		fetch(API_LOGIN, userConfig)
			.then(res => res.json())
			.then(apiResponse => {
				if (!apiResponse.error) {
					localStorage.setItem("token", apiResponse.jwt)
					let user = JSON.parse(apiResponse.currentUser)
					dispatch(setCurrentUser(user))
					dispatch(getTripsByUserID(user.id))
				} else {
					console.log(apiResponse)//@TODO error notice IZI toast
				}
			})
	}
}

export function resolveUserToken(token){
	return (dispatch) => {
		fetch(API_TOKEN, {
	        method: "GET",
	        headers: {
	          "Authentication": token
	        }
	      })
	      .then(res => res.json())
	      .then(user => {
	        dispatch(setCurrentUser(user))
	        dispatch(getTripsByUserID(user.id))
	      })
	}
}

export function setCurrentUser(user){
	return {type: LOG_IN, payload: user}
}
