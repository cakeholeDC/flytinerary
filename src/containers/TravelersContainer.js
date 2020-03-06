import React from "react"
import { connect } from 'react-redux'
import TravelerCard from "../components/TravelerCard.js"
import { Card } from 'semantic-ui-react'


class TravelersContainer extends React.Component {
	render(){
		return(
			<Card.Group centered items-per-row={4}>
				{ this.props.travelers.map(traveler => <TravelerCard traveler={traveler} />) }
			</Card.Group>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips,
    travelers: state.travelers
  }
}

export default connect(mapStateToProps)(TravelersContainer)