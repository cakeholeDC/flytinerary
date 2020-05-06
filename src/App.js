import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { fetchingTrips, fetchingTravelers } from './redux/actions'
import HeaderContainer from "./containers/HeaderContainer.js"
import ContentContainer from "./containers/ContentContainer.js"
// import { Router } from "react-router-dom";


class App extends React.Component {
  componentDidMount(){
    this.props.fetchingTrips()
    this.props.fetchingTravelers()
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
  fetchingTrips: () => { dispatch(fetchingTrips()) },
  fetchingTravelers: () => { dispatch(fetchingTravelers()) } 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
