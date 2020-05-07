import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import Moment from 'react-moment';
// import 'moment-timezone';
import * as moment from 'moment'
import styled from 'styled-components'

const Card = styled.div`
	width: 18rem;
    height: 10rem;
	margin: .5rem .5rem;

	img {
		width: 100%;
	    height: 100%;
		object-fit: cover;
		
	}
    
	.trip-content-flex {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: absolute;
		width: inherit;
	    height: inherit;
		
		-webkit-transition: background-color .75s;

		&:hover{
			background-color: rgba(203, 203, 203, 0.3);
		}
	}

	.trip-overlay {
	    background-color: rgba(0,0,0,.5);
	    padding: .6rem;
	}

    p {
    	color: #fff;
    	margin-bottom: 0px;
	    
	    &.trip-name {
	    	font-weight: bold;
	    }

	    &.trip-dates{
	    	font-size: .8em;
	    }
    }

    .trip-metrics-flex {
    	display:flex;
	    
	    .trip-travelers,
		.trip-events {
			flex: 1;
	    	font-size: .75em;
	    	font-style: italic;
	    }

	    .trip-events {
	    	text-align: right;
	    }
    }
`

class TripCard extends React.Component {

	displayTripCardDateRange = (tripStart, tripEnd) => {
		const start = moment(tripStart)
		const end = moment(tripEnd)

		// does the event occurr within a single year?
		if (start.format('YYYY') === end.format('YYYY')) {
			// does the event occurr within the a single month?
			if (start.format("MM") === end.format("MM")) {
				return `${start.format("MMM D")} – ${end.format("D, YYYY")}`
			} else {
				return `${start.format("MMM D")} – ${end.format("MMM D, YYYY")}`
			}
		} else {
			// the event does not occur within a single year, and therefore cannot occurr within a single month
			return `${start.format("MMM D, YYYY")} – ${end.format("MMM D, YYYY")}`
		}
	}

	loadTripShowPage = () => {
		this.props.history.push(`/trips/${this.props.trip.id}`)
	}

	render(){
		let { nickname, destination, image, start_datetime, end_datetime, organizer, attendees, event_timeline } = this.props.trip

		let dates = this.displayTripCardDateRange(start_datetime, end_datetime)
		let travelers = `${attendees.length} Attendee${attendees.length > 1 || attendees.length === 0 ? "s" : '' }`
		let events = `${event_timeline.length} Event${event_timeline.length > 1 || event_timeline.length === 0 ? "s" : '' }`
		
		return(
			<Card className="trip-card" onClick={ this.loadTripShowPage }>
				<div className="trip-content-flex">
					<div className="trip-overlay" >
						<p className="trip-name">{nickname}</p>
						<p className="trip-dates">{dates}</p>
						<div className='trip-metrics-flex'>
							<p className="trip-travelers">{travelers}</p>
							<p className="trip-events">{events}</p>
						</div>
					</div>
				</div>
				<img src={image} alt={destination}/>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips
  }
}

export default withRouter(connect(mapStateToProps)(TripCard))
