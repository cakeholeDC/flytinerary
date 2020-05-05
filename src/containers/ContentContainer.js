import React from "react"
import HomeContainer from './HomeContainer.js'
import TripsContainer from './TripsContainer.js'
// import TravelersContainer from './TravelersContainer.js'
import TripDetails from '../components/TripDetails.js'
import About from '../components/About.js'
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
import { device } from '../utils/device'

const Content = styled.div`
	background-color: gray;

	width: 80%;
	@media screen and ${device.tablet} {
		width: 100%;
	}

	height: calc(100% - 62px); //62px is navbar height
	margin: auto;
`


function ContentContainer() {
	return(
		<Content>
			<Switch>
              <Route exact path="/trips/:id" component={TripDetails}/>
              <Route exact path="/trips" component={TripsContainer} />
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={HomeContainer} />
			</Switch>
		</Content>
	)
}

export default ContentContainer