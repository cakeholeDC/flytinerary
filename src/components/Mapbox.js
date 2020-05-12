import React from 'react'
import ReactMapGL from 'react-map-gl'
import { Marker } from 'react-map-gl'
import styled from 'styled-components'
// HOME 38.9240973,-77.0274758
import { getEventColor } from '../utils/Helpers'


const MapContainer = styled.div`
	img {
		max-height: 20px;
		max-width: 20px;
	}
`

export default class Mapbox extends React.Component{
	state = {
	    // viewport: {
	      width: 'inherit', // controlled by Flexbox
	      height: 'calc(100vh - (62px / 2))',
	      latitude: 38.9240973,
	      longitude: -77.0274758,
	      zoom: 13.5,
	    // }
	}

	componentDidMount(){
		this.setState({
		      latitude: this.props.trip.latitude,
		      longitude: this.props.trip.longitude,
		})
	}

	 mapboxGeolocate = (query, type=null) => {
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

	getEventPin(event){
		switch(event.event_type.toLowerCase()) {
			case "flight":
				return "/images/icons/map/red-marker.png"
			case "lodging":
				return "/images/icons/map/blue-marker.png"
			case "reservation":
				return "/images/icons/map/yellow-marker.png"
			case "meal":
				return "/images/icons/map/green-marker.png"
			case "other":
				return "/images/icons/map/orange-marker.png"
			default:
				return 'https://image.flaticon.com/icons/svg/1397/1397898.svg'
			
		}
	}

    render() {
    	const { viewport } = { viewport: {...this.state} }
    	const trip = this.props.trip
    	// generate a central marker for the PRIMARY trip destination
    	const destination = { 
    		latitude: trip.latitude,
    		longitude: trip.longitude,
    		name: trip.destination
    	} 

    	// const EVENT_PIN = "https://image.flaticon.com/icons/svg/1397/1397898.svg"
    	const EVENT_PIN = '/images/icons/map/red-marker.png'
    	const CITY_PIN = "https://img.icons8.com/office/16/000000/marker.png"
	    return (
	    	<MapContainer>
		      <ReactMapGL
		        {...viewport}
		      	mapboxApiAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
		        onViewportChange={(viewport) => this.setState({...viewport})}
		        mapStyle="mapbox://styles/cakehole/ck9vdfrq40zp11ilisa9eqvvg"
		        // mapStyle="mapbox://styles/cakehole/ck9vdwijy0h6u1iomel35a3hk"
		      >
		      	Markers Here
		      { /* FIRST MARK CITY, THEN MARK EVENTS */ }
		      	<Marker latitude={ destination.latitude } longitude={ destination.longitude } key={ destination.name} >
		      		<img src={ CITY_PIN } alt={destination.name} onClick={()=>console.log("marker clicked")}/>
		      	</Marker> 
		      	{
		      		trip.event_timeline.map(event => { 
		      			//convert strings to decimals
						event.latitude = parseFloat(event.start_latitude, 10)
						event.longitude = parseFloat(event.start_longitude, 10)
						
						return <Marker latitude={ event.latitude } longitude={ event.longitude } key={ event.name }>
							<img src={ this.getEventPin(event) } alt={ event.name } onClick={()=>console.log("marker clicked")} key={ event.name } onError={event => event.target.src="/images/icons/map/red-marker.png"} />
						</Marker>
		      		})
		      	}
		      </ReactMapGL>
	      </MapContainer>
	    );
  }

}