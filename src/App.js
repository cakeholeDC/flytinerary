//dependencies
import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { Switch, Route } from "react-router-dom";
//content
import HeaderContainer from "./containers/HeaderContainer.js"
import ContentContainer from "./containers/ContentContainer.js"
import LoginContainer from './containers/LoginContainer.js'
//actions
import { getTripsByUserID, fetchingTravelers, setCurrentUser, resolveUserToken } from './redux/actions'

const API_URL = "http://localhost:3000"
const PROFILE_URL = `${API_URL}/profile`

class App extends React.Component {
  componentDidMount(){

    let token = localStorage.getItem("token")

    if (token) {
      this.props.resolveUserToken(token)
    }
  }

  render(){
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
  getTripsByUserID: (user) => { dispatch(getTripsByUserID(user)) },
  resolveUserToken: (token) => { dispatch(resolveUserToken(token)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
