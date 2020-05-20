//dependencies
import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { Switch, Route } from "react-router-dom";
//content
import HeaderBar from "./components/HeaderBar.js"
import ContentContainer from "./containers/ContentContainer.js"
import LoginContainer from './containers/LoginContainer.js'
//actions
import { resolveUserToken, fetchEventCategories } from './redux/actions'

const API_URL = "http://localhost:3000"
const PROFILE_URL = `${API_URL}/profile`

class App extends React.Component {
  
  componentDidMount(){
    let token = localStorage.getItem("token")
    if (token) {
      this.props.resolveUserToken(token)
    }
    this.props.fetchEventCategories()
  }

  render(){
    return (
      <div className="App">
        <HeaderBar />
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  resolveUserToken: (token) => { dispatch(resolveUserToken(token)) },
  fetchEventCategories: () => { dispatch(fetchEventCategories()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
