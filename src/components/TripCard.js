import React from 'react'
import { Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


class TripCard extends React.Component {

	loadTripShowPage = () => {
		this.props.history.push(`/trips/${this.props.trip.id}`)
	}


	render(){
		console.log("Trip", this.props.trip.nickname, this.props)
		
		let { id, nickname, destination, start_datetime, end_datetime, image, organizer, attendees } = this.props.trip
		return(
			<Card
				onClick={ this.loadTripShowPage }
			    image={ image }
			    header={ nickname }
			    meta={ destination }
			    description={ `${start_datetime} to ${end_datetime}` }
			    extra={ `${attendees.length} people attending`  }
			  />
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

