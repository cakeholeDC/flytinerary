import React from 'react'
import ReactMapGL from 'react-map-gl'
import { Marker } from 'react-map-gl'
import styled from 'styled-components'
// HOME 38.9240973,-77.0274758

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
	      height: 'calc(100vh - 62px)',
	      latitude: 38.9240973,
	      longitude: -77.0274758,
	      zoom: 12.5,
	    // }
	}

	async componentDidMount(){
		const mapOrigin = await this.mapboxGeolocate(this.props.location)
		this.setState({
		      latitude: mapOrigin.latitude,
		      longitude: mapOrigin.longitude,
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

    render() {
    	const { viewport } = { viewport: {...this.state} }
    	const destination = {...this.state } // generate a central marker for the PRIMARY destination
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
		      	<Marker latitude={ destination.latitude }longitude={ destination.longitude } key={this.props.location} >
		      		<img src="https://image.flaticon.com/icons/svg/1397/1397898.svg" alt="Map Marker" onClick={()=>console.log("marker clicked")}/>
		      	</Marker> 
		      </ReactMapGL>
	      </MapContainer>
	    );
  }
}