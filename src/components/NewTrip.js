import React from 'react'
import TripModal from './TripModal.js'

class NewTrip extends React.Component {
	state = {
		search: null,
		showTripModal: false
	}

	toggleTripModal = () => {
		this.setState({
			showTripModal: !this.state.showTripModal
		})
	}

	handleNewTripSearchFormSubmit = (event) =>{
		event.preventDefault()
		this.toggleTripModal()
		event.target.reset()
	}

	handleSearchFieldChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render (){
		return (
			<div id="new-trip-container">
				<h1>Where to?</h1>
				<form 
					onSubmit={ this.handleNewTripSearchFormSubmit }
					onChange={ event => this.handleSearchFieldChange(event) }
				>
					<input name="search" placeholder="Bali, Indonesia"></input>
					<button type="submit" name='submit' >GO!</button>
				</form>
				<TripModal status={ this.state.showTripModal } close={ this.toggleTripModal } search={ this.state.search }/>
			</div>
		)
	}
}

export default NewTrip