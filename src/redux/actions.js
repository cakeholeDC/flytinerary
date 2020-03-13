export const FETCHED_TRIPS = "FETCHED_TRIPS"
export const FETCHED_TRAVELERS = "FETCHED_TRAVELERS"
export const LOG_IN = "LOG_IN"

const PROD_URL = "https://flytinerary-api.herokuapp.com"
const DEV_URL = "http://localhost:3000"

// let BASE_URL = PROD_URL
let BASE_URL = DEV_URL

const TRIPS_URL = `${BASE_URL}/trips`
const TRAVELERS_URL = `${BASE_URL}/travelers`
const EVENTS_URL = `${BASE_URL}/events`
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

export function fetchingTravelers(){
	return (dispatch) => {
		fetch(TRAVELERS_URL)
	      .then(res => res.json())
	      .then(travelers_array => {
	      	dispatch(fetchedTravelers(travelers_array))
	      })
	}
}

export function fetchedTravelers(travelers_array){
	return { type: FETCHED_TRAVELERS, payload: travelers_array }
}

// export function processLoginForm(user){
// 	return (dispatch) => {
// 		const userConfig = {
// 			method: "POST",
// 			headers: {
// 				'Content-Type': "application/json",
// 				"Accept" : "application/json"
// 			},
// 			body: JSON.stringify(user)
// 		}
// 		fetch(API_LOGIN, userConfig)
// 			.then(res => res.json())
// 			.then(apiResponse => {
// 				if (!apiResponse.error) {
// 					localStorage.setItem("token", apiResponse.jwt)
// 					dispatch(setCurrentUserState(JSON.parse(apiResponse.currentUser)))
// 					iziToast.success({
// 						title: `${JSON.parse(apiResponse.currentUser).username}`,
// 					    message: "Welcome to Hunger Swype",
// 					    timeout: 3000,
// 					    resetOnHover: false,
// 					    transitionIn: 'fadeInDown',
// 					    transitionOut: 'fadeOutUp',
// 					    position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
// 					})
// 				} else {
// 					handleErrorAPI(apiResponse)
// 					// alert(apiResponse.message)
// 				}
// 			})
// 	}
// }

// export function processNewUserForm(user){
// 	return (dispatch) => {
// 			const userConfig = {
// 			method: "POST",
// 			headers: {
// 				'Content-Type': "application/json",
// 				"Accept" : "application/json"
// 			},
// 			body: JSON.stringify(user)
// 		}
// 		fetch(USER_URL, userConfig)
// 			.then(res => res.json())
// 			.then(apiResponse => {
// 				if (!apiResponse.error) {
// 					localStorage.setItem("token", apiResponse.jwt)
// 					dispatch(setCurrentUserState(JSON.parse(apiResponse.currentUser)))
// 				} else {
// 					handleErrorAPI(apiResponse)
// 				}
// 			})
// 	}
// }

// export function processUserUpdateForm(user){
// 	return (dispatch) => {
// 			const userConfig = {
// 			method: "PATCH",
// 			headers: {
// 				'Content-Type': "application/json",
// 				"Accept" : "application/json"
// 			},
// 			body: JSON.stringify(user)
// 		}
// 		fetch(`${USER_URL}/${user.id}`, userConfig)
// 			.then(res => res.json())
// 			.then(apiResponse => {
// 				if (!apiResponse.error) {
// 					// localStorage.setItem("token", apiResponse.jwt)
// 					dispatch(setCurrentUserState(JSON.parse(apiResponse.currentUser)))
// 				} else {
// 					handleErrorAPI(apiResponse)
// 				}
// 			})
// 	}
// }

// export function toggleFavorite(userID, recipe){
// 	return (dispatch) => {
// 		const fav_config = {
// 			method: "POST",
// 			headers: {
// 				'Content-Type': "application/json",
// 				"Accept" : "application/json"
// 			},
// 			body: JSON.stringify({
// 				userID: userID,
// 				recipe: recipe
// 			})
// 		}
// 		fetch(FAVORITES_URL, fav_config)
// 			.then(res => res.json())
// 			.then(favoritesList => {
// 				dispatch(updateFavorites(favoritesList))
// 			})
// 	}
// }

// export function updateFavorites(favoritesList){
// 	return { type: FAVORITE, payload: favoritesList}
// }

// export function logOutUser() {
// 	iziToast.info({
// 		title: "Auf Wiedersehen!",
// 	    timeout: 5000,
// 	    transitionIn: 'fadeInDown',
// 	    transitionOut: 'fadeOutUp',
// 	    position: 'topCenter',
// 	})
// 	return (dispatch) => {
// 		localStorage.removeItem('token')
// 		dispatch(setCurrentUserState(null))	
// 	}
// }

// export function setCurrentUserState(user){
// 	return {type: LOG_IN, payload: user}
// }
