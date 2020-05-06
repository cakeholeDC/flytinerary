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
					dispatch(setCurrentUser(JSON.parse(apiResponse.currentUser)))
				} else {
					console.log(apiResponse)//@TODO error notice IZI toast
				}
			})
	}
}

export function setCurrentUser(user){
	return {type: LOG_IN, payload: user}
}
