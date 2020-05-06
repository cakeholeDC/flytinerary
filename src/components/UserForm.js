import React from 'react'
import { connect } from 'react-redux'

class UserForm extends React.Component {
	state={
	  id: 1,
	  first_name: "Kyle",
	  last_name: "Cole",
	  username: "cakehole",
	  age: 31,
	  gender: "M"
	}

	// componentDidMount(){
	// 	if (this.props.currentUser) {
	// 		const user = this.props.currentUser
	// 		// this.setState({
	// 		// 	id: user.id,
	// 		// 	first_name: user.first_name,
	// 		// 	last_name: user.last_name,
	// 		// 	username: user.username,
	// 		// 	age: user.age,
	// 		// 	gender: user.gender,
	// 		// })
	// 	}
	// }

	render(){
		return (
			<form>
				<label for="name">Name
				<input type="text" name="name" placeholder={ this.state.username } />
				</label>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(UserForm)