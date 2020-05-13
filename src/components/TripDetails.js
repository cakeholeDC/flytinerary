import React from 'react' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'  //to match url params
//components
import ErrorPage from './ErrorPage'
import FullCalendar from './FullCalendar'
import { displayTripCardDateRange, getEventColor } from '../utils/Helpers'

import { getCategoryColor } from '../utils/Helpers'

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
		flex: 3;
		display: flex;
		flex-direction: column;
	}

	.map {
		flex: 2;
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
		
	.events{
		padding: 2rem 2rem 0rem 2rem;
	}	

	.key {
		width: 100%;
		margin: auto;
		display: flex;
		padding: 0rem 0rem 1rem 0rem;

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

	// getEventColor = (category) =>{
	// 	switch(category.name.toLowerCase()) {
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
			console.log(event)
			let category = this.props.categories.find(c => c.id === event.category_id)
			let color = getCategoryColor(category.name)
			//map event object to FullCalendar key names //@todo, fix in db?
			return {
				id: event.id,
				allDay: event.all_day,	
				start: event.start ? event.start : trip.start,
				end: event.end,
				title: event.title,
				url: `/events/${event.id}`,
				latitude: event.latitude,
				longitude: event.longitude,
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
		const attendees = trip ? trip.attendees.sort((a, b) => a.last_name > b.last_name ? 1 : -1) : null
		const dates = trip ? displayTripCardDateRange(trip.start, trip.end) : null
		const timeline = trip ? this.renderCalendar(trip) : null

		return (
			trip
			? <Trip>
				<div className="details">
					<div className="trip-header">
						<h1 className="nickname">{ trip.title }</h1>
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
							{ timeline }
							<div className="key">
								{ this.props.categories.map(c => <div className="color" style={{ backgroundColor: `${getCategoryColor(c.name)}`}}>{c.name}</div>) } 
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips,
    categories: state.categories
  }
}

export default withRouter(connect(mapStateToProps)(TripDetails))