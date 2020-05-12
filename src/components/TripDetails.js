import React from 'react' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'  //to match url params
//components
import ErrorPage from './ErrorPage'
// import CalendarModule from './CalendarModule'
import FullCalendar from './FullCalendar'
// import EventContainer from '../containers/EventContainer.js'
import { displayTripCardDateRange, getEventColor } from '../utils/Helpers'

//packages
import styled from 'styled-components'
import Mapbox from './Mapbox'

const Trip = styled.div`
	display: flex;
	flex-direction: row;
	text-align: left;
	// min-height: 100%;
	// height: 100%;

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

	.key {
		width: 80%;
		margin: auto;
		display: flex;

		.color {
			text-align: center;
			padding: 0.25rem 0;
			flex: 1;
			width: 3rem;
		}
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

	// getEventColor(event){
	// 	switch(event.event_type.toLowerCase()) {
	// 		case "flight":
	// 			return "#BF0D3E"
	// 		case "lodging":
	// 			return "#009CDE"
	// 		case "reservation":
	// 			return "#FFD100"
	// 		case "meal":
	// 			return "#00B140"
	// 		case "other":
	// 			return "#ED8B00"
			
	// 	}
	// }

	renderCalendar = (trip) => {
		let events = trip ? trip.event_timeline.map(event => {
			let color = getEventColor(event)
			//map event object to FullCalendar key names //@todo, fix in db?
			return {
				id: event.id,
				allDay: false,	
				start: event.start_datetime ? event.start_datetime : trip.start_datetime,
				end: event.end_datetime,
				title: event.title,
				url: `/events/${event.id}`,
				editable: true,
				backgroundColor: color,
				borderColor: color
			}
		}) : false
		return <FullCalendar trip={ trip } events={ events } />
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
								 		{ attendees.map(traveler => <li key={traveler.username}>{ this.getTravelerName(traveler) }</li>) }
								 	</ul>
							 	</div>
							 </div>
							<div className="events">
								<div className="key">
									<div className="color" style={{ backgroundColor: "#BF0D3E" }}>flight</div>
									<div className="color" style={{ backgroundColor: "#009CDE" }}>lodging</div>
									<div className="color" style={{ backgroundColor: "#FFD100" }}>reservation</div>
									<div className="color" style={{ backgroundColor: "#00B140" }}>meal</div>
									<div className="color" style={{ backgroundColor: "#ED8B00" }}>other</div>
								</div>
								{ timeline }
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips
  }
}

export default withRouter(connect(mapStateToProps)(TripDetails))