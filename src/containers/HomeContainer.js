import React from 'react'
import TripsContainer from './TripsContainer.js'
// import NewTrip from '../components/NewTrip.js'
import styled from 'styled-components'

const HomePage = styled.div`
	text-align: left;
	padding: 3rem;

`

class HomeContainer extends React.Component {
	render (){
		return (
			<HomePage>
				<h1>{"Welcome, ${NAME}"}</h1>
				<TripsContainer homepage/>
			</HomePage>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips
  }
}

export default HomeContainer