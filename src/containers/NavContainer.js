import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'


const Nav = styled.div`
	// width: 70%;
	// margin: auto;
	flex: 5;
	display: flex;
	background-color: pink;
	font-size: 1.25rem;

	a {
		flex: 1;
	}
`

function NavContainer(props) {
	return(
		<Nav id="nav-container">
	        <NavLink className="selected" to='/' exact>Home</NavLink>
			<NavLink className="selected" to='/trips' exact>Trips</NavLink>
			<NavLink className="selected" to='/travelers' exact>Travelers</NavLink>
			<NavLink className="selected" to='/about' exact>About</NavLink>
      	</Nav>
	)
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(NavContainer)