import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { handleLogIn } from '../redux/actions'


const Form = styled.form`
	background-color: orange;
	
	width: 60%;
	margin: 3rem auto 0rem;
	display: flex;
	flex-direction: column;

	fieldset {
		flex: 3;
		text-align: left;
		display: flex;
		flex-direction: column;
	}


	p { flex: 1; }

	label, input, button {
		display: block;
		flex: 1;
	}
`

class UserForm extends React.Component {
	state={
		id: null,
		first_name: null,
		last_name: null,
		username:null,
		age: null,
		gender: null,
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
				gender: this.state.gender,
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
				<fieldset>
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
				<button type="submit" name="submit">{ this.state.isSignUp ? "Sign Up" : "Log In"}</button>
				</fieldset>
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