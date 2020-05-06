import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { fetchingTrips, fetchingTravelers, setCurrentUser } from './redux/actions'
import HeaderContainer from "./containers/HeaderContainer.js"
import ContentContainer from "./containers/ContentContainer.js"
import { Redirect, Router } from "react-router-dom";


var testUser = {
  id: 1,
  first_name: "Kyle",
  last_name: "Cole",
  username: "cakehole",
  age: 31,
  gender: "M"
}

class App extends React.Component {
  componentDidMount(){
    this.props.getTrips()
    // this.props.getUsers()
    // this.props.setUser(testUser)
  }

  render(){
    // console.log("API", process.env.REACT_APP_MAPBOX_TOKEN)
    return (
      <div className="App">
        <HeaderContainer />
        <ContentContainer />
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
  setUser: (user) => { dispatch(setCurrentUser(user)) },
  getTrips: () => { dispatch(fetchingTrips()) },
  // getUsers: () => { dispatch(fetchingTravelers()) } 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
