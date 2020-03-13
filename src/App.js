import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { fetchingTrips, fetchingTravelers } from './redux/actions'
import NavBar from "./components/NavBar.js"
import MainContainer from "./containers/MainContainer.js"


class App extends React.Component {
  componentDidMount(){
    this.props.fetchingTrips()
    this.props.fetchingTravelers()
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
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
