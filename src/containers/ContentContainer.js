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
	width: 100vw;
`

class ContentContainer extends React.Component {
	render(){
		return(
			<Content id="content-container">
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