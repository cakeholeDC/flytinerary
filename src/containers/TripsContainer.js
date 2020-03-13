import React from "react"
import { connect } from 'react-redux'
import TripCard from "../components/TripCard.js"
import { Card } from 'semantic-ui-react'


class TripsContainer extends React.Component {
	render(){
		// console.log("TripsContainer", this.props)
		return(
			<Card.Group centered items-per-row={4}>
				{ this.props.trips.map((trip, index) => <TripCard key={index} trip={trip} />) }
			</Card.Group>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips
  }
}

export default connect(mapStateToProps)(TripsContainer)