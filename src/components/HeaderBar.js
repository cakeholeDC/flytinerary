import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import BurgerMenu from '../components/BurgerMenu'


import styled from 'styled-components'

const Header = styled.div`
	height: calc(3rem + 30px);
	width: 100%;
	background-color: orange;
	display: flex;
	flex-direction: row;

	.img {
		max-height: 40px;
		max-width: 140px;
	}

	.menu,
	.user-actions {
		flex: 1;
	}

	.logo {
		flex: 5;
		justify-content: flex-start;
	}

	.avatar {
		flex: 1;
		max-width: 40px;
		max-height: 40px;

		img {
			border-radius: 50%;
			padding: 5px;
		}
	}
`

function HeaderBar(props) {
	return(
		<Header >
			<div className="menu">
				{ !props.currentUser	
					? <BurgerMenu />
					: null 
				}
			</div>
			<div className="logo">
				<img src="https://via.placeholder.com/140x40.png?text=Flytinerary Logo" />
			</div>
			<div className="user-actions">
				<Link className="avatar" to={ props.currentUser ? "/profile" : "/Login" }><img className="avatar" src="https://via.placeholder.com/400x400.png?text=Avatar" /></Link>
			</div>
      	</Header>
	)
}

export default HeaderBar