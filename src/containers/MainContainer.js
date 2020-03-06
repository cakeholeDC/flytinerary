import React from "react"
import HomeContainer from './HomeContainer.js'
import TripsContainer from './TripsContainer.js'
import TravelersContainer from './TravelersContainer.js'
import TripDetails from '../components/TripDetails.js'
import About from '../components/About.js'
import { Route, Switch } from "react-router-dom";


class MainContainer extends React.Component {
	render(){
		return(
			<Switch>
              <Route exact path="/trips/:id" component={ TripDetails }/>
              <Route exact path="/trips" component={ TripsContainer } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/" component={ HomeContainer } />
			</Switch>
		)
	}
}

export default MainContainer