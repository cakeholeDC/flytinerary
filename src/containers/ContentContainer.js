import React from "react"
import HomeContainer from './HomeContainer.js'
import TripsContainer from './TripsContainer.js'
import LoginContainer from './LoginContainer.js'
// import TravelersContainer from './TravelersContainer.js'
import TripDetails from '../components/TripDetails.js'
import About from '../components/About.js'
import { Route, Switch, Redirect } from "react-router-dom"
import styled from 'styled-components'
import { device } from '../utils/device'
import { connect } from 'react-redux'


const Content = styled.div`
	background-color: gray;

	width: 80%;
	@media screen and ${device.tablet} {
		width: 100%;
	}

	height: calc(100% - 62px); //62px is navbar height
	margin: auto;
`


class ContentContainer extends React.Component {
	render(){
		return(
			<Content>
	          <Route exact path="/login" component={ LoginContainer } />
				{ !this.props.currentUser 
              		? <Redirect to='/login' />
          	  		: <Switch>
				        <Route exact path="/trips/:id" component={ TripDetails }/>
				        <Route exact path="/trips" component={ TripsContainer } />
				        <Route exact path="/about" component={ About } />
			            <Route exact path="/profile" component={ HomeContainer } />
				        <Route exact path="/" component={ HomeContainer } />
					</Switch>
				}
			</Content>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(ContentContainer)