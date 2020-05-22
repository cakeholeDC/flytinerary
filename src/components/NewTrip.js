import React from 'react'
import TripModal from './TripModal.js'
import styled from 'styled-components'

const TripCreator = styled.div`
	text-align: center;
	// margin: 2rem;
		padding: 1rem;
		width: 100%;
		border-top: 1px solid lightgray;
		border-bottom: 1px solid lightgray;

	input {
		padding: .5rem;
		border: 1px solid lightgray;
		margin: 0 .5rem 0 0;
	}

	button  {
		padding: .5rem;
	}
`

class NewTrip extends React.Component {
	state = {
		search: null,
		showTripModal: false
	}

	// ACTION TO SUBMIT SEARCH
	handleNewTripSearchFormSubmit = (e) => {
		e.preventDefault()
		this.toggleModal()
	}
	// ACTION TO SUBMIT FORM

	// ACTION TO EDIT

	// ACTION TO SHOW FORM
	toggleModal = () => {
		this.setState({
			showTripModal: !this.state.showTripModal
		})
	}

	//update state on form change
	handleSearchFieldChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render (){
		return (
			<TripCreator>
				<h3>Where to next?</h3>
				<form 
					onSubmit={ this.handleNewTripSearchFormSubmit }
					onChange={ event => this.handleSearchFieldChange(event) }
				>
					<input name="search" placeholder="Bali, Indonesia"></input>
					<button type="submit" name='submit' >GO!</button>
				</form>
				<TripModal showModal={ this.state.showTripModal } closeModal={ this.toggleModal } location={ this.state.search} />
			</TripCreator>
		)
	}
}

export default NewTrip