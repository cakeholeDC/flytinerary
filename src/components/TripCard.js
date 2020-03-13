import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import Moment from 'react-moment';
// import 'moment-timezone';
import * as moment from 'moment'


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
		let { id, nickname, destination, start_datetime, end_datetime, image, organizer, attendees } = this.props.trip
		
		return(
			<Card onClick={ this.loadTripShowPage }>
			    <Image src={ image } wrapped ui="false"/>
				<Card.Content>
				    <Card.Header>{ nickname }</Card.Header>
				    <Card.Meta>
				    	{ this.displayTripCardDateRange(start_datetime, end_datetime) }
				    </Card.Meta>
				    <Card.Description>{ destination }</Card.Description>
				    <Card.Meta>{ `Organizer: ${organizer.name}` }</Card.Meta>
			    </Card.Content>
			    <Card.Content extra>
			    	{ `${attendees.length} people attending`  }
			    </Card.Content>
			    <Button>
			    	TEST
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
