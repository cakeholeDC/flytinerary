import React from 'react'
import TripsContainer from './TripsContainer.js'
import styled from 'styled-components'
import { connect } from 'react-redux'


const HomePage = styled.div`
	text-align: left;
	padding: 3rem;

`

class HomeContainer extends React.Component {
	render (){
		return (
			<HomePage>
				<h1>{`Welcome, ${this.props.currentUser.username}`}</h1>
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