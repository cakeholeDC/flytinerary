import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { fetchingTrips, fetchingTravelers, setCurrentUser } from './redux/actions'
import HeaderContainer from "./containers/HeaderContainer.js"
import ContentContainer from "./containers/ContentContainer.js"
import LoginContainer from './containers/LoginContainer.js'
import { Switch, Route } from "react-router-dom";

const API_URL = "http://localhost:3000"
const PROFILE_URL = `${API_URL}/profile`

class App extends React.Component {
  componentDidMount(){

    let token = localStorage.getItem("token")

    if (token) {
      fetch(PROFILE_URL, {
        method: "GET",
        headers: {
          "Authentication": token
        }
      })
      .then(res => res.json())
      .then(user => {
        this.props.setCurrentUser(user)
      })
    }
  }

  render(){
    // console.log("API", process.env.REACT_APP_MAPBOX_TOKEN)
    return (
      <div className="App">
        <HeaderContainer />
        { this.props.currentUser 
          ? <ContentContainer />
          : <LoginContainer />
        }
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => { dispatch(setCurrentUser(user)) },
  getTrips: (user) => { dispatch(fetchingTrips(user)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
