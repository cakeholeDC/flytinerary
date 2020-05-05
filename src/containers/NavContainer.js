import React from 'react'
// import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
	height: 62px;
	background-color: pink;
`

function NavContainer() {
	return(
		<Nav>
			<nav>
	        <NavLink className="selected" to='/' exact>Home</NavLink>
			<NavLink className="selected" to='/trips' exact>Trips</NavLink>
			<NavLink className="selected" to='/travelers' exact>Travelers</NavLink>
			<NavLink className="selected" to='/about' exact>About</NavLink>
			<NavLink className="selected" to='/profile' exact>
				Login / Profile
			</NavLink>
			</nav>
      	</Nav>
	)
}

export default NavContainer