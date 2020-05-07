import React from "react"
import { connect } from 'react-redux'
import TripCard from "../components/TripCard.js"
import styled from 'styled-components'


const Trips = styled.div`
	min-height: 100%;
	margin: auto;
  	display: flex;
  	flex-wrap: wrap;
  	flex-direction: row;
  	justify-content: center;
  	border: 1px solid black;

  	h2 {
  		width: 100%;
  	}
`

class TripsContainer extends React.Component {
	render(){
		const trips = this.props.trips
		return(
			<Trips className="trips-container">
				<h2>Your Upcoming Trips</h2>
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