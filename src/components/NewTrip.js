import React from 'react'
// import TripModal from './TripModal.js'
import styled from 'styled-components'

const TripCreator = styled.div`
	text-align: center;
`

class NewTrip extends React.Component {
	state = {
		search: null,
		showTripModal: false
	}

	// ACTION TO SHOW FORM

	// ACTION TO SUBMIT FORM

	// ACTION TO EDIT

	handleSearchFieldChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render (){
		return (
			<TripCreator>
				<button>Schedule a Trip</button>
				<form 
					onSubmit={ this.handleNewTripSearchFormSubmit }
					onChange={ event => this.handleSearchFieldChange(event) }
				>
					<input name="search" placeholder="Bali, Indonesia"></input>
					<button type="submit" name='submit' >GO!</button>
				</form>
			</TripCreator>
		)
	}
}

export default NewTrip