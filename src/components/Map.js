import React from 'react'
import ReactMapGL from 'react-map-gl';

// HOME 38.9240973,-77.0274758


export default class Map extends React.Component{
	state = {
	    viewport: {
	      width: '50vw',
	      height: '50vh',
	      latitude: 38.9240973,
	      longitude: -77.0274758,
	      zoom:15,
	    }
	}

    render() {
    	const { viewport } = this.state
	    return (
	    	<div>
		      <ReactMapGL
		        {...viewport}
		      	// mapboxApiAccessToken="pk.eyJ1IjoiY2FrZWhvbGUiLCJhIjoiY2s5dWE0MXdpMWxsNjNscDVpeDE4MGpkbiJ9.fDrpr5UV2DsAc75AQMlQBw"
		      	mapboxApiAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
		        // onViewportChange={(viewport) => this.setState({viewport})}
		      >
		      	Markers Here
		      </ReactMapGL>
	      </div>
	    );
  }
}