import React from "react"
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from "react-router-dom"
import styled from 'styled-components'

import { device } from '../utils/device'

import HeaderBar from "../components/HeaderBar.js"
import About from '../components/About.js'
import TripDetails from '../components/TripDetails.js'

import HomeContainer from './HomeContainer.js'
import TripsContainer from './TripsContainer.js'
import LoginContainer from './LoginContainer.js'

const Content = styled.div`
	height: 100%;
	width: 100%;

	background: url(/images/retro-map.jpg) no-repeat center center fixed; 
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;

	.overlay {
		height: 100%;
		width: 100%;
		background-color: rgba(255, 255, 255, .5);
	}
`

class ContentContainer extends React.Component {
	render(){
		return(
			<Content id="content-container">
			<div className="overlay">
		        <HeaderBar />
				<Switch>
					<Route exact path="/trips/:id" component={ TripDetails }/>
			        <Route exact path="/trips" component={ TripsContainer } />
			        <Route exact path="/archive" render={() => <TripsContainer archive /> } />
			        <Route exact path="/about" component={ About } />
		            <Route exact path="/profile" component={ HomeContainer } />
		            <Route exact path="/profile" component={ LoginContainer } />
			        <Route exact path="/" component={ HomeContainer } />
				</Switch>
			</div>
			</Content>
		)
	}
}
		      		// <Route exact path="/sign-up" component={ LoginContainer } />
	          		// <Route exact path="/login" component={ LoginContainer } />

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(ContentContainer)