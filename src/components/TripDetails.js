import React from 'react' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import EventContainer from '../containers/EventContainer.js'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FrZWhvbGUiLCJhIjoiY2s3Zm04b3h1MDRlZTNrbWc0M28wamh2OCJ9.kNZrUDu1526M25O1XQi4mQ';
var map = new mapboxgl.Map({
container: 'MAPBOX-TEST',
style: 'mapbox://styles/mapbox/streets-v11'
});

class TripDetails extends React.Component {

	getCurrentTrip = () => {
		return this.props.trips.filter(trip => trip.id === parseInt(this.props.match.params.id), 10)[0]
	}

	render(){
		console.log(this.getCurrentTrip())
		return (
			this.props.trips.length > 0 
			? <div>
				<h1>{ this.getCurrentTrip().nickname }</h1>
				<h2>{ this.getCurrentTrip().destination }</h2>
				<h3>Organized by: { this.getCurrentTrip().organizer.name }</h3>
				<div className="attendees">
				<ul>Attendees:
					{ this.getCurrentTrip().attendees.map(traveler => <li>{ traveler.name }</li>) }
				</ul>
				</div>
				<EventContainer events={ this.getCurrentTrip().event_timeline }/>
				<div id="MAPBOX-TEST">
				</div>
			</div>
			: null
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips
  }
}

export default withRouter(connect(mapStateToProps)(TripDetails))