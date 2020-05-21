import React from "react"
import { connect } from 'react-redux'
import TripCard from "../components/TripCard.js"
import styled from 'styled-components'
import moment from 'moment'

const Trips = styled.div`
	min-height: 100%;
	margin: auto;
  	display: flex;
  	flex-wrap: wrap;
  	flex-direction: row;
  	justify-content: center;

  	h2 {
  		width: 100%;
  	}
`

class TripsContainer extends React.Component {
	render(){
		let trips = this.props.trips

		if (this.props.archive){
			trips = trips.filter(trip=> new Date(trip.start) < new Date())
		} else {
			trips = trips.filter(trip=> new Date(trip.start) >= new Date())
		}

		return(
			<Trips className="trips-container">
				<h2>Your { this.props.archive ? "Past" : "Upcoming" } Trips</h2>
					{ trips.map((trip, index) => <TripCard key={index} trip={trip} />) }
			</Trips>
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