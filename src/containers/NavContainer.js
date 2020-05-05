import React from 'react'
// import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
	width: 70%;
	margin: auto;
	display: flex;
	background-color: pink;
	font-size: 1.25rem;

	a {
		flex: 1;
	}
`

function NavContainer() {
	return(
		<Nav id="nav-container">
	        <NavLink className="selected" to='/' exact>Home</NavLink>
			<NavLink className="selected" to='/trips' exact>Trips</NavLink>
			<NavLink className="selected" to='/travelers' exact>Travelers</NavLink>
			<NavLink className="selected" to='/about' exact>About</NavLink>
			<NavLink className="selected" to='/profile' exact>
				Login / Profile
			</NavLink>
      	</Nav>
	)
}

export default NavContainer