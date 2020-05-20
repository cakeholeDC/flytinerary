import React from 'react'
import TripsContainer from './TripsContainer.js'
import NewTrip from '../components/NewTrip'
import styled from 'styled-components'
import { connect } from 'react-redux'


const HomePage = styled.div`
	text-align: center;
	padding: 3rem;


	@media screen and (max-width: 768px) {
	    padding: 3rem 0;
	}

`

class HomeContainer extends React.Component {
	render (){
		return (
			<HomePage>
				<h1>{`Welcome, ${this.props.currentUser.username}`}</h1>
				<NewTrip />
				<TripsContainer/>
			</HomePage>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(HomeContainer)