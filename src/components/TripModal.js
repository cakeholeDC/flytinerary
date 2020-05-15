import React from 'react'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'

//helpers
import { mapboxGeolocate } from './Mapbox.js'
import TRAVEL_QUOTES from '../data/travelQuotes.js'

//actions
import { postNewTrip } from '../redux/actions'

const Form = styled.form`
	display: flex;
	flex-direction: column;

	input {
		flex: 1;
		padding: .5rem;
		border: 1px solid lightgray;
		margin: 0 0 .5rem 0;
	}

	img {
		max-width: 100px;
		max-height: 100px;
	}
`

class TripModal extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			quote: TRAVEL_QUOTES[Math.floor(Math.random() * TRAVEL_QUOTES.length)],
			title: props.trip ? props.trip.title : null,
			destination: props.trip ? props.trip.destination : null,
			start: props.trip ? moment(props.trip.start).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD"),
			end: props.trip ? moment(props.trip.end).format("YYYY-MM-DD") : moment().add(1, 'week').format("YYYY-MM-DD"),
			user_id: props.currentUser.id, //ALWAYS current_user
			image: props.trip ? props.trip.image : null
		}
	}

	getPlaceholderImage = () => {
		let url = `https://source.unsplash.com/random/500x500/?${ this.state.destination ? this.state.destination : this.props.location }`
		fetch(url)
			.then(res => this.setState({
				image: res.url
			}))
	}


	handleTripFormChange(event){
		if (!this.state.destination && event.target.name !== "destination") {
			this.setState({
				[event.target.name]: event.target.value,
				destination: this.props.location
			})
		} else if (event.target.name === "start" && false) {
			//ACCOUNT FOR START > END or END < START
		} else {
			this.setState({
				[event.target.name]: event.target.value
			})
		}
	}

	handleTripFormSubmit = async (event) => {
		event.preventDefault()

		const coordinates = await mapboxGeolocate(this.state.destination)


		const tripObj = {
			title: this.state.title,
			destination: this.state.destination,
			start: this.state.start,
			end: this.state.end,
			user_id: this.state.user_id,
			image: this.state.image,
			latitude: coordinates.latitude,
			longitude: coordinates.longitude,
		}
		if (this.props.trip) {
			//PATCH TRIP
		} else {
			//POST NEW TRIP
			this.props.postNewTrip(tripObj)
		}

		this.props.closeModal()
	}

	render(){


		return(
			<Modal
				size="small"
			    open={ this.props.showModal }
			    onClose={ this.props.closeModal }
			    closeOnDimmerClick={false}
			    closeOnEscape
			    closeIcon
		    >
				<Modal.Header>"{ this.state.quote.quote }"
			    	{ this.state.quote.author ? <p><em><small>-{ this.state.quote.author }</small></em></p> : null }
			    </Modal.Header>
			    <Modal.Content>
			    	<Modal.Description style={{width: "100%"}}>
				    	<Form 
					    	onChange={ event => this.handleTripFormChange(event) }
					    	onSubmit={ event => this.handleTripFormSubmit(event) }
				    	>
				    		<label for="title">Trip Name</label>
				    		<input type="text" name="title" placeholder="Bill & Ted's Excellent Adventure" defaultValue={this.state.title}/>
				    		<label for="destination">Destination</label>
				    		<input type="text" name="destination" defaultValue={this.state.destination ? this.state.destination : this.props.location} placeholder="Scranton, PA"/>
				    		
				    		<div className="trip-timeline">
					    		<label for="start">start</label>
					    		<input type="date" name="start" defaultValue={ this.state.start }/>
					    		<label for="end">end</label>
					    		<input type="date" name="end" defaultValue={ this.state.end }/>
					    	</div>
				    		
				    		<label for="image">Image</label>
				    		<div>
				    			<input type="text" name="image" defaultValue={this.state.image} placeholder="Add a photo or leave blank for a random one."/>
				    			<div>
						    	<img src={ this.state.image } onError={ event => event.target.src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3372&q=80" } />
					    		<button type="button" onClick={ this.getPlaceholderImage }>Random Photo!</button>	
				    			</div>
				    		</div>

				    		
				    		<button floated="right" type='submit'>Schedule Trip</button>
				    	</Form>
			    	</Modal.Description>
			    </Modal.Content>
			    <div>Footer</div>
			</Modal>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  	currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => ({
  postNewTrip: (tripObj) => { dispatch(postNewTrip(tripObj)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TripModal)