import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import BurgerMenu from '../components/BurgerMenu'


import styled from 'styled-components'

const HeaderBar = styled.div`
	width: 100%;
	height: calc(3rem + 30px);
	background-color: orange;
	display: flex;
	flex-direction: row;

	.img {
		max-height: 40px;
		max-width: 140px;
	}

	.menu,
	.logo,
	.user-actions {
		flex: 1;
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

function HeaderContainer(props) {
	return(
		<HeaderBar >
			<div className="menu">
				<BurgerMenu />
			</div>
			<div className="logo">
				<img src="https://via.placeholder.com/140x40.png?text=Flytinerary Logo" />
			</div>
			<div className="user-actions">
			{ props.currentUser /* @@TODO - make this an interactive menu*/
				? <a className="avatar" href="/profile"><img className="avatar" src="https://via.placeholder.com/400x400.png?text=Avatar" /></a>
				: <Link className="avatar" to="/login">Sign In</Link>
			}
			</div>
      	</HeaderBar>
	)
}

export default HeaderContainer