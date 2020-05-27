import React from 'react'
import UserForm from '../components/UserForm'
import { withRouter} from 'react-router-dom'
import styled from 'styled-components'
import HeaderBar from "../components/HeaderBar.js"

const Login = styled.div`

	height: 100%;
	background: url(/images/login-alt.jpg) no-repeat center center fixed; 
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;

	padding: 5rem;

	h1 {
		font-family: 'Pacifico', cursive;
		// font-weight: bold;
		font-size: 7rem;
		color: white;
	}

	h2 {
		font-family: 'Amatic SC', cursive;
		font-size: 4rem;
		color: white;
		margin-top: 4rem;
	}
	

	@media screen and (max-width: 768px) {
		padding: 1rem;

		h1 {
			margin-top: 1.5rem;
			font-size: 3rem;
		}
		h2{ 
			font-size: 2rem;
			margin-top: 1.5rem;
		}
	}
`


function LoginContainer(props) {
	let isSignUp = (props.match.url === "/sign-up")
	let isLogIn = (props.match.url === "/login")
	return (
		<Login id="login">
			<h1>Flytinerary</h1>
			<h2>Group Travel, Simplified.</h2>
			<UserForm isSignUp={isSignUp} isLogIn={isLogIn} />
		</Login>
	)
}

export default withRouter(LoginContainer)