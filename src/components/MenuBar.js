import React from 'react'
// import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../utils/device'
import NavContainer from '../containers/NavContainer'

const Menu = styled.div`
	width: 80%;

	@media screen and ${device.tablet} {
		width: 94%;
	}

	margin: auto;
	background-color: green;
	display: flex;

	.logo {
		flex: 3;
		max-height: 40px;
		max-width: 140px;
	}

	.navbar {
		flex: 10;
	}

	.avatar {
		flex: 1;
		max-width: 40px;
		max-height: 40px;
	}
`

function MenuBar() {
	return(
		<Menu>
			<img className="logo" src="https://via.placeholder.com/140x40.png?text=Flytinerary Logo" />
			<NavContainer className="navbar" />
			<img className="avatar" src="https://via.placeholder.com/40x40.png?text=Avatar" />
		</Menu>
	)
}

export default MenuBar