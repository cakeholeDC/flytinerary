import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import TRAVEL_QUOTES from '../data/travelQuotes.js'

class TripModal extends React.Component {
	state = {
		quote: TRAVEL_QUOTES[Math.floor(Math.random() * TRAVEL_QUOTES.length)],
		nickname: null,
		destination: null,
		start_datetime: null,
		end_datetime: null,
		organizer_id: null,//current_user
		image: null
	}

	getPlaceholderImage = (query) => {
		const image = this.state.destination ? this.state.destination : this.props.search
		return `https://source.unsplash.com/random/500x500/?${ image }`
	}

	handleTripFormChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleTripFormSubmit(event) {
		event.preventDefault()
	}

	render(){
		const moment = require('moment');
		// const placeholderImage = this.state.image ? this.state.image : this.getPlaceholderImage(this.props.search)

		return(
			<Modal
			    open={ this.props.status }
			    onClose={ this.props.close }
			    closeOnDimmerClick
			    closeOnEscape
			    closeIcon
		    >
				<Modal.Header>"{ this.state.quote.quote }"
			    	{ this.state.quote.author ? <p><em><small>-{ this.state.quote.author }</small></em></p> : null }
			    </Modal.Header>
			    <Modal.Content image>
				    	<Image wrapped size="medium" src={ this.getPlaceholderImage() } onError={ event => event.target.src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3372&q=80" } />
			    	<Modal.Description style={{width: "100%"}}>
				    	<Form 
					    	onChange={ event => this.handleTripFormChange(event) }
					    	onSubmit={ event => this.handleTripFormSubmit(event) }
				    	>
				    		<Form.Input type="text" name="nickname"  placeholder="Bill & Ted's Excellent Adventure"/>
				    		<Form.Input type="text" name="destination" value={this.props.search} placeholder="Scranton, PA"/>
				    		<Form.Group widths="equal">
					    		<Form.Input type="date" name="start_datetime" value={ moment().format("YYYY-MM-DD") }/>
					    		<Form.Input type="date" name="end_datetime" value={ moment().add(1, 'week').format("YYYY-MM-DD") }/>
					    	</Form.Group>
				    		<Form.Input type="text" name="image" placeholder="Add a photo or leave blank for a random one."/>
				    		<Button floated="right" type='submit'>Schedule Trip</Button>
				    	</Form>
			    	</Modal.Description>
			    </Modal.Content>
			</Modal>
		)
	}
}

export default TripModal