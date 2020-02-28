import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { fetchingTrips } from './redux/actions'
import NavBar from "./components/NavBar.js"
import MainContainer from "./containers/MainContainer.js"


class App extends React.Component {
  componentDidMount(){
    this.props.fetchingTrips()
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
  fetchingTrips: () => { dispatch(fetchingTrips()) } 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
