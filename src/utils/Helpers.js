import * as moment from 'moment'

export function displayTripCardDateRange(tripStart, tripEnd) {
		const start = moment(tripStart)
		const end = moment(tripEnd)

		// does the event occurr within a single year?
		if (start.format('YYYY') === end.format('YYYY')) {
			// does the event occurr within the a single month?
			if (start.format("MM") === end.format("MM")) {
				return `${start.format("MMM D")} – ${end.format("D, YYYY")}`
			} else {
				return `${start.format("MMM D")} – ${end.format("MMM D, YYYY")}`
			}
		} else {
			// the event does not occur within a single year, and therefore cannot occurr within a single month
			return `${start.format("MMM D, YYYY")} – ${end.format("MMM D, YYYY")}`
		}
	}

export function getCategoryColor(category){
	switch(category.toLowerCase()) {
		case "flight":
			return "#BF0D3E"
		case "lodging":
			return "#009CDE"
		case "reservation":
			return "#FFD100"
		case "meal":
			return "#00B140"
		case "other":
			return "#ED8B00"
		
	}
}

export function toTitleCase(str){
	str = str.toLowerCase().split(' ');
	let final = [ ];
   
	for(let word of str){
      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }

	return final.join(' ')
}

export function mapboxGeolocate(query, type=null) {
	 	// type will ultimately be used to change the endpoint as needed, default is string lookup
		const geoLocateURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${ process.env.REACT_APP_MAPBOX_TOKEN }`

		return fetch(geoLocateURL)
			.then(res => res.json())
			.then(json => {
				const coordinates = { 
					latitude: json.features[0].center[1],
					longitude: json.features[0].center[0]
				}
				return coordinates
			})
	}