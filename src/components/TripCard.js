import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import Moment from 'react-moment';
// import 'moment-timezone';
// import * as moment from 'moment'


class TripCard extends React.Component {

	loadTripShowPage = () => {
		this.props.history.push(`/trips/${this.props.trip.id}`)
	}

	displayTripCardDateRange = (tripStart, tripEnd) => {
		const moment = require('moment');

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


	render(){
		console.log(this.props.trip.nickname, this.props.trip)
		let { nickname, destination, start_datetime, end_datetime, image, organizer, attendees, event_timeline } = this.props.trip
		
		return(
			<Card onClick={ this.loadTripShowPage }>
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
