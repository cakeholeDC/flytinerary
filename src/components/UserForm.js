import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { handleLogIn } from '../redux/actions'


const Form = styled.form`	
	width: 30%;
	margin: 3rem auto;
	display: flex;
	flex-direction: column;
	background: rgba(202, 202, 202, .8);
	padding: 2rem;
	border-radius: 25px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	p { 
		flex: 1;
		text-align: left;
		margin-top: 1rem;
	}

	label, input {
		display: block;
		flex: 1;
	}

	input {
		padding: .5rem;
		border: 1px solid lightgray;
		margin: 0 0 .5rem 0;
	}

	label {
		font-weight: bold;
		text-transform: uppercase;
		text-align: left;
		margin-bottom: .125rem;
		
		// &:nth-of-type(1) {
		// 	margin: 0;
		// }
	}

	.button-container {
		flex: 1;
		margin: .5rem 0;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;

		button {
			width: fit-content;
		}
	}
`

class UserForm extends React.Component {
	state={
		id: null,
		first_name: null,
		last_name: null,
		username:null,
		age: null,
		password: null,
	    isSignUp: false,
	}

	componentDidMount(){
		console.log(this.props)
		if (this.props.isSignUp){
			this.setState({
				isSignUp: true
			})
		}
	}

	toggleSignUp = () => {
		this.setState({
			isSignUp: !this.state.isSignUp
		})
	}

	onFormChange(event){
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	submitUserForm(event) {
		event.preventDefault()
		let userObj
		
		if (this.state.isSignUp) {
			userObj = {
				id: this.state.id,
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				username: this.state.username,
				age: this.state.age,
				password: this.state.password,
			}
		} else {
			userObj = {
				username: this.state.username,
				password: this.state.password,
			}
		}

		this.props.handleLogIn(userObj)

	}

	render(){
		const user = this.props.currentUser ? this.props.currentUser : {}
		return (
			<Form 
				onSubmit={ event => this.submitUserForm(event) } 
				onChange={ event => this.onFormChange(event) }
			>
				<input
						type="hidden"
						name="id"
						value={ null }
					/>
				<label for="username">Username</label>
				<input
					id="username"
					type="text"
					name="username"
					placeholder="Myster1ousTravl3r"
					value={ user.username }
				/>
				<label for="password">Password</label>
				<input
					id="password"
					type="password"
					name="password"
					placeholder="p4ssw0rd!"
				/>
				{ this.state.isSignUp 
					? <React.Fragment>
						<label for="first_name">First</label>
						<input
							id="first_name"
							type="text"
							name="first_name"
							placeholder="Carlos"
							value={ user.first_name }
						/>
						<label for="last_name">Last</label>
						<input
							id="last_name"
							type="text"
							name="last_name"
							placeholder="Santana"
							value={ user.last_name }
						/>
						<label for="age">Age</label>
						<input
							id="age"
							type="number"
							name="age"
							placeholder="66"
							value={ user.age }
						/>
					</React.Fragment>
					: null
				}
				<div className="button-container">
					<button type="submit" name="submit">{ this.state.isSignUp ? "Sign Up" : "Log In"}</button>
				</div>
				{ this.state.isSignUp
					? <p>Already have an account? <a onClick={ this.toggleSignUp }>Log-in here.</a></p>
					: <p>Need an account? <a onClick={ this.toggleSignUp }>Click here to sign up.</a></p>
				}
				
			</Form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogIn: (user) => { dispatch(handleLogIn(user)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)