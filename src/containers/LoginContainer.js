import React from 'react'
import UserForm from '../components/UserForm'
import { withRouter} from 'react-router-dom'
import styled from 'styled-components'

function LoginContainer(props) {
	let isSignUp = (props.match.url === "/sign-up")
	let isLogIn = (props.match.url === "/login")
	return (
		<UserForm isSignUp={isSignUp} isLogIn={isLogIn} />
	)
}

export default withRouter(LoginContainer)