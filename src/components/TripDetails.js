import React from 'react' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import EventContainer from '../containers/EventContainer.js'
import Map from './Map'

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN

class TripDetails extends React.Component {

	getCurrentTrip = () => {
		return this.props.trips.filter(trip => trip.id === parseInt(this.props.match.params.id), 10)[0]
	}

	render(){
		// console.log(this.getCurrentTrip())
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
				<Map />
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