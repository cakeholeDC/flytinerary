import React from 'react' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'  //to match url params
//components
import ErrorPage from './ErrorPage'
// import CalendarModule from './CalendarModule'
import FullCalendar from './FullCalendar'
// import EventContainer from '../containers/EventContainer.js'
import { displayTripCardDateRange } from '../utils/Helpers'

//packages
import styled from 'styled-components'
import Mapbox from './Mapbox'

const Trip = styled.div`
	display: flex;
	flex-direction: row;
	text-align: left;
	min-height: 100%;

	.details {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.map {
		flex: 1;
	}

	.trip-header {
		flex: 1;
		max-height: 6.5rem;
		padding: 1rem 2rem;
		border-bottom: 1px solid lightgray;

		display: flex;
		flex-direction: column;

		.nickname {
			flex:1;
			// margin-bottom: 0px;
		}

		.subhead {
			flex: 1;
			font-size: .8rem;
			font-style: italic;

			display: flex;
			flex-direction: row;

			.dates {
				flex:1;
				margin-bottom: none;
			}

			.destination {
				flex: 1;
				text-align: right;
				margin-bottom: none;
			}
		}
	}

	.trip-body {
		// flex:5;
		padding: 1rem;
		
		.contact{
			display: flex;

			.organizer,
			.attendees {
				flex: 1;
			}
		}
	}

	ul {
		// list-style: none;
		padding-left: 1rem;
	}

	.events, .organizer, .attendees {
		border: 1px solid black;
	}

`

class TripDetails extends React.Component {

	getCurrentTrip = () => {
		if (this.props.trips.length > 0) {
			const trip = this.props.trips.filter(trip => trip.id === parseInt(this.props.match.params.id), 10)[0]
			
			trip.latitude = parseFloat(trip.latitude, 10)
			trip.longitude = parseFloat(trip.longitude, 10)
			
			return trip
		} else {
			return false
		}
	}

	getTravelerName(user){
		return `${user.first_name} ${user.last_name}`
	}

	renderCalendar = (trip) => {
		let events = trip ? trip.event_timeline.map(event => {
			return {
				id: event.id,
				allDay: false,	
				start: event.start_datetime ? event.start_datetime : trip.start_datetime,
				end: event.end_datetime,
				title: event.event_type,
				url: `/events/${event.id}`,
				editable: true
			}
		}) : false
		// return <CalendarModule trip={trip} />
		return <FullCalendar trip={trip} events={events}/>
	}

	render(){
		const trip = this.getCurrentTrip()
		
		const organizerName = trip ? (trip.organizer.first_name + ' ' + trip.organizer.last_name) : null
		const attendees = !trip ? null : trip.attendees.sort((a, b) => a.last_name > b.last_name ? 1 : -1)
		const dates = displayTripCardDateRange(trip.start_datetime, trip.end_datetime)
		const timeline = this.renderCalendar(trip)
		return (
			trip
				? <Trip>
					<div className="details">
						<div className="trip-header">
							<h1 className="nickname">{ trip.nickname }</h1>
							<div className="subhead">
								<p className="dates">{ dates }</p>
								<p className="destination">{ trip.destination }</p>
							</div>
						</div>
						<div className="trip-body">
							<div className="events">
								{ timeline }
							</div>
							<div className="contact">
								<div className="organizer">
									<p>Questions?</p>
									<p>
										{ organizerName }<br/>
										{ 'user@email.com' }<br/>
										{ '555-555-5555' }
									</p>
								</div>
								<div className="attendees">
									<p>{attendees.length} people attending</p>
								 	<ul >
								 		{ attendees.map(traveler => <li>{ this.getTravelerName(traveler) }</li>) }
								 	</ul>
							 	</div>
							 </div>
					 	</div>
				 	</div>
				 	<div className="map">
					 	<Mapbox trip={trip}/>
				 	</div>
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