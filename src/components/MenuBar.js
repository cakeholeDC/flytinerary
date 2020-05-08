import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import NavContainer from '../containers/NavContainer'
import { device } from '../utils/device'
import { Link } from 'react-router-dom'

const Menu = styled.div`
	// width: 80%;
	width: inherit;

	@media screen and ${device.tablet} {
		// width: 94%;
	}

	margin: auto;
	background-color: green;
	display: flex;

	#header-logo {
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

		img {
			border-radius: 50%;
			padding: 5px;
		}
	}
`

function MenuBar(props) {
	return(
		<Menu>
			<a id="header-logo" href="/"><img className="logo" src="https://via.placeholder.com/140x40.png?text=Flytinerary Logo" /></a>
			<NavContainer className="navbar" />
			{ props.currentUser /* @@TODO - make this an interactive menu*/
				? <a className="avatar" href="/profile"><img className="avatar" src="https://via.placeholder.com/400x400.png?text=Avatar" /></a>
				: <Link to="/login">Sign In</Link>
			}
		</Menu>
	)
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(MenuBar)