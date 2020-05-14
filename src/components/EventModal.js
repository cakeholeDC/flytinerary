import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import styled from 'styled-components'

//helpers
import { mapboxGeolocate } from './Mapbox.js'
import { toTitleCase } from '../utils/Helpers'

//actions
import { postNewEvent } from '../redux/actions'

const Form = styled.form`
	display: flex;
	flex-direction: column;

	input {
		flex: 1;
		padding: .5rem;
		border: 1px solid lightgray;
	}

	select {
		height: 2.429rem;
		border: 1px solid lightgray;
		background-color: #fff;
	}

	textarea {
		border: 1px solid lightgray;
	}

	.event-time {
		width: 80%;
		display: flex;

		.all-day, .start-end {
			flex: 1;
		}
	}
` 

class EventModal extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			trip: null,
			category: '', 
			user: null,
			title: "",
			start: null,
			end: null,
			all_day: false,
			location: "",
			latitude: null,
			longitude: null,
			company_agency: "",
			reservation_number: null,
			notes: "",
		}
	}

	componentDidMount(){
		this.setState({
			trip: this.props.trip,
			user: this.props.currentUser,
		})
	}

	getPlaceholderImage = (query) => {
		const image = this.state.destination ? this.state.destination : this.props.search
		return `https://source.unsplash.com/random/500x500/?${ image }`
	}

	handleEventFormChange = (event) => {
		// @TODO need to update the sate of START and END
		if (event.target.name === "all_day"){
			this.setState({
				all_day: !this.state.all_day
			})
		} else if (event.target.name === "title") {
			this.setState({
				[event.target.name]: event.target.value,
				start: !this.state.start ? moment(this.props.calendarData.date).format() : this.state.start,
				end: !this.state.end ? moment(this.props.calendarData.date).format() : this.state.end,
			})
		} else {
			this.setState({
				[event.target.name]: event.target.value
			})
		}
	}

	handleEventFormSubmit = async (event) => {
		event.preventDefault()
		event.target.reset()
		let coordinates = await mapboxGeolocate(this.state.location)

		const eventObj = {
			trip: this.state.trip.id,
			category: Number(this.state.category),
			user: this.state.user.id,
			title: this.state.title,
			start: this.state.start,
			end: this.state.end,
			all_day: this.state.all_day,
			location: this.state.location,
			//grab lat/long by geolocating the location name
			latitude: coordinates.latitude,
			longitude: coordinates.longitude,
			company_agency: this.state.company_agency,
			reservation_number: this.state.reservation_number,
			notes: this.state.notes,
		}
		// POST request
		this.props.postNewEvent(eventObj)
		this.props.closeModal()
	}

	render(){
		const startDate = !this.state.all_day ? moment(this.state.start).format("YYYY-MM-DDTHH:mm") : moment(this.state.start).format('YYYY-MM-DD')
		const endDate = !this.state.all_day ? moment(this.state.end).format("YYYY-MM-DDTHH:mm") : moment(this.state.end).format('YYYY-MM-DD')
		return(
			<Modal
			    open={ this.props.showModal }
			    onClose={ this.props.closeModal }
			    closeOnDimmerClick
			    closeOnEscape
			    closeIcon
		    >
				<Modal.Header>New Event { this.props.calendarData ? `for ${moment(this.props.calendarData.date).format("MMMM D")}` : null }</Modal.Header>
			    <Modal.Content>
			    	<Form onChange={ this.handleEventFormChange } onSubmit={ this.handleEventFormSubmit }>

						<label for="title">Trip Name</label>
						<input type="text" name="title" placeholder="Bill & Ted's Excellent Adventure" />

						<label for="category">Category</label>
						<select name="category">
							<option disabled value="" selected style={{ color: "gray"}}>Select a Category</option>
							{ this.props.categories.map(c => <option key={c.name} value={ c.id } name={c.name}>{ toTitleCase(c.name) }</option>) }
						</select>
						<div className="event-time">
							<div className="all-day">
								<label for="all_day">All Day</label>
								<input type="checkbox" name="all_day" value={this.state.all_day}/>
							</div>
							<div className="start-end">
								<label for="start">Start</label>
								<input type={ this.state.all_day ? "date" : "datetime-local"} name="start" value={startDate}/>
								
								{ !this.state.all_day 
									? <React.Fragment>
										  <label for="end">End</label>
										  <input type={ this.state.all_day ? "date" : "datetime-local"} name="end" value={endDate}/>
									  </React.Fragment>
									: null
								}
							</div>
						</div>

						<label for="location">Where?</label>
						<input type="text" name="location" placeholder="San Dimas, California" />
						
						<label for="company">Agency/Company Name</label>
						<input type="text" name="company_agency" placeholder="Pan American Airlines" />
						<label for="reservation">Reservation Number</label>
						<input type="text" name="reservation_number" placeholder="PA 1927" />
						<label for="notes">Notes</label>
						<textarea name="notes" rows="4" cols="10" placeholder="Flight has a layover in Chicago."/>
						<button type="submit">Create Event</button>
			    	</Form>
			    </Modal.Content>
			</Modal>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  	currentUser: state.currentUser,
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch) => ({
  postNewEvent: (eventObj) => { dispatch(postNewEvent(eventObj)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(EventModal)
			    	// <Modal.Description style={{width: "100%"}}>
				    // 	<Form 
					   //  	onChange={ event => this.handleEventFormChange(event) }
					   //  	onSubmit={ event => this.handleEventFormSubmit(event) }
				    // 	>
				    // 		<Form.Input type="text" name="nickname"  placeholder="Bill & Ted's Excellent Adventure"/>
				    // 		<Form.Input type="text" name="destination" value={this.props.search} placeholder="Scranton, PA"/>
				    // 		<Form.Group widths="equal">
					   //  		<Form.Input type="date" name="start_datetime" value={ moment().format("YYYY-MM-DD") }/>
					   //  		<Form.Input type="date" name="end_datetime" value={ moment().add(1, 'week').format("YYYY-MM-DD") }/>
					   //  	</Form.Group>
				    // 		<Form.Input type="text" name="image" placeholder="Add a photo or leave blank for a random one."/>
				    // 		<Button floated="right" type='submit'>Schedule Trip</Button>
				    // 	</Form>
			    	// </Modal.Description>