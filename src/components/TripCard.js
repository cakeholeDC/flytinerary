import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import Moment from 'react-moment';
// import 'moment-timezone';
import * as moment from 'moment'
import styled from 'styled-components'

const Card = styled.div`
	// width: 12rem;
 //    height: 18.75rem;
	width: 18rem;
    height: 10rem;
	background: white; //shows through image when transparent
	margin: .5rem .5rem;


	img {
		width: 100%;
	    height: 100%;
		object-fit: cover;
	}

	.blocker {
	    background-color: rgba(0,0,0,.4);
	    width: inherit;
	    height: 7%;
	    margin-top: 7.5%;
	    position: absolute;
	    z-index: 1;
	}

	.trip-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: absolute;
		width: inherit;
	    height: inherit;
	    padding: .5rem;
	    z-index: 999999;

	    p {
	    	color: #fff;
	    	margin-bottom: 0px;
	    }

	    .trip-name {
	    	font-weight: bold;
	    }

	    .trip-dates{
	    	font-size: .8em;
	    }

	    .trip-metrics {
	    	display:flex;

	    }

	    .trip-travelers,
    	.trip-events {
    		flex: 1;
	    	font-size: .75em;
	    	font-style: italic;
	    }
	    .trip-events{
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
				<div className="trip-content">
					<p className="trip-name">{nickname}</p>
					<p className="trip-dates">{dates}</p>
					<div className='trip-metrics'>
						<p className="trip-travelers">{travelers}</p>
						<p className="trip-events">{events}</p>
					</div>
				</div>
				<div className="blocker" />
				<img src={image} />
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

				    	// <Moment format="MMM, D">{start_datetime}</Moment> to&nbsp;
				    	// <Moment format="MMM, D">{end_datetime}</Moment>


				/*    	<Card onClick={ this.loadTripShowPage }>
			    <img 
			    	src={ image }
			    	alt={ nickname } 
			    	height="198px" 
			    	style={{objectFit: "cover"}}/>
				<Card.Content>
				    <Card.Header>{ nickname }</Card.Header>
				    <Card.Meta>
				    	{ this.displayTripCardDateRange(start_datetime, end_datetime) }
				    </Card.Meta>
				    <Card.Description>{ destination }</Card.Description>
				    <Card.Meta>{ `Organizer: ${organizer.name}` }</Card.Meta>
			    </Card.Content>
			    <Card.Content extra>
				    <Icon name='user' />
			    	{ `${attendees.length} Travelers`  }
			    </Card.Content>
			    <Button>
				    <Icon name="calendar alternate" />
			    	{ `View Flytinerary - ${event_timeline.length} Items` }
			    </Button>
			</Card>*/
