import React from 'react' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'  //to match url params
//components
import ErrorPage from './ErrorPage'
// import EventContainer from '../containers/EventContainer.js'

//packages
import styled from 'styled-components'
import Map from './Map'

const Trip = styled.div`
`

class TripDetails extends React.Component {

	getCurrentTrip = () => {
		if (this.props.trips.length > 0) {
			const trip = this.props.trips.filter(trip => trip.id === parseInt(this.props.match.params.id), 10)[0]
			return trip
		} else return false
	}

	render(){
		console.log(this.props)
		const trip = this.getCurrentTrip()
		console.log("trip", trip)
		// const destination = trip ? trip.destination : null
		const organizerName = trip ? (trip.organizer.first_name + ' ' + trip.organizer.last_name) : null

		return (
			trip
				? <Trip>
					<h1>{ trip.nickname }</h1>
					<h2>{ trip.destination }</h2>
					<h3>Organized by: { organizerName }</h3>
				 	<div className="attendees">
				 	<ul>Attendees:
				 		{ trip.attendees.map(traveler => <li>{ traveler.username }</li>) }
				 	</ul>
				 	</div>
				 	<Map location={trip.destination}/>
				</Trip>
			: <ErrorPage />
		)
	}
}
			// this.props.trips.length > 0 
			// ? <div>
			// 	<h1>{ this.getCurrentTrip().nickname }</h1>
			// 	<h2>{ destination }</h2>
			// 	<h3>Organized by: { organizerName }</h3>
			// 	<div className="attendees">
			// 	<ul>Attendees:
			// 		{ this.getCurrentTrip().attendees.map(traveler => <li>{ traveler.name }</li>) }
			// 	</ul>
			// 	</div>
			// 	<Map location={destination}/>
			// </div>
			// : null

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips
  }
}

export default withRouter(connect(mapStateToProps)(TripDetails))