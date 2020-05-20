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

	.menu {
		flex: 1;
	}

	.logo {
		flex: 5;
		padding: 1rem;
		
		h1 {
			font-family: 'Pacifico', cursive;
		}
	}

	.user-actions {
		text-align: right;
		flex: 1;
		min-width: 48px;
		min-height: 48px;
		padding: calc((3rem + 30px)/2 - (48px/2));

		img {
			max-width: 48px;
			max-height: 48px;
			border-radius: 50%;
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
				<h1>Flytinerary</h1>
				{/*<img src="https://via.placeholder.com/140x40.png?text=Flytinerary Logo" />*/ }
			</div>
			<div className="user-actions">
				<Link className="avatar" to={ props.currentUser ? "/profile" : "/Login" }><img className="avatar" src="/images/icons/icons8-user-96.png" /></Link>
			</div>
      	</Header>
	)
}

export default HeaderBar