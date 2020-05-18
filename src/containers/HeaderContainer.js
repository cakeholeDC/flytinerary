import React from 'react'
// import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MenuBar from '../components/MenuBar'

const HeaderBar = styled.div`
	width: 100%;
	height: 62px;
	// background-color: pink;
	display: flex;
	flex-direction: column;
`

function HeaderContainer() {
	return(
		<HeaderBar >
	        <MenuBar />
      	</HeaderBar>
	)
}

export default HeaderContainer