import React from 'react'
import ReactMapGL from 'react-map-gl';

// HOME 38.9240973,-77.0274758


export default class Map extends React.Component{
	state = {
	    // viewport: {
	      width: '50vw',
	      height: '50vh',
	      latitude: 38.9240973,
	      longitude: -77.0274758,
	      zoom:12.5,
	    // }
	}

	componentDidMount(){
		const geoLocateURL = this.getGeoLocation(this.props.location)
	
		fetch(geoLocateURL)
			.then(res => res.json())
			.then(json => {
				const coordinates = json.features[0].center
				this.setState({
				      latitude: coordinates[1],
				      longitude: coordinates[0],
				})
			})

	}

	getGeoLocation = (query, type=null) => {
		if (!type){
			return `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.props.location}.json?access_token=${ process.env.REACT_APP_MAPBOX_TOKEN }`
		}
	}

    render() {
    	const { viewport } = { viewport: {...this.state} }
	    return (
	    	<div>
		      <ReactMapGL
		        {...viewport}
		      	mapboxApiAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
		        onViewportChange={(viewport) => this.setState({viewport})}
		        mapStyle="mapbox://styles/cakehole/ck9vdfrq40zp11ilisa9eqvvg"
		        // mapStyle="mapbox://styles/cakehole/ck9vdwijy0h6u1iomel35a3hk"
		      >
		      	Markers Here
		      {/* import Marker from react-map => import data => map(data => <Marker latitude={} longitude={} key="">[CONTENT FOR ICON, BUTTON, IMG, ETC]</Marker> */}
		      </ReactMapGL>
	      </div>
	    );
  }
}