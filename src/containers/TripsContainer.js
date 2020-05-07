import React from "react"
import { connect } from 'react-redux'
import TripCard from "../components/TripCard.js"
// import { Card } from 'semantic-ui-react'
import styled from 'styled-components'


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

  	.trip {
  		text-align: center;
  		flex: 1;
  	} 
`

class TripsContainer extends React.Component {
	render(){
		const trips = this.props.trips
		return(
			<Trips className="trips-container">
				<h2>Your Trips</h2>
					{/* trips.map((trip, index) => <TripCard key={index} trip={trip} />) */}
				{ trips.map((trip, index) => <div className="trip" key={index}><a href={`/trips/${trip.id}`}>{trip.nickname}</a></div>) }
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