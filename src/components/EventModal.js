import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Modal, Form } from 'semantic-ui-react'

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
			if (event.target.value === "on") {
				this.setState({
					all_day: true
				})
			}
			if (event.target.value === "off") {
				this.setState({
					all_day: false
				})
			}
		} else {
			this.setState({
				[event.target.name]: event.target.value
			})
		}
	}

	handleEventFormSubmit(event) {
		event.preventDefault()
	}

	render(){
		const selectedDate = this.props.calendarData ? moment(this.props.calendarData.date) : null
		return(
			<Modal
			    open={ this.props.showModal }
			    onClose={ this.props.closeModal }
			    closeOnDimmerClick
			    closeOnEscape
			    closeIcon
		    >
				<Modal.Header>New Event</Modal.Header>
			    <Modal.Content>
			    	<Form onChange={ this.handleEventFormChange }>
			    		<input type="hidden" name="trip" placeholder="trip" />
						<input type="hidden" name="user" placeholder="user" />

						<label for="title">Trip Name</label>
						<input type="text" name="title" placeholder="title" />

						<label for="category">Category</label>
						<select name="category">
							{ this.props.categories.map(c => <option name={c.name}>{c.name}</option>) }
						</select>
						<div>
							<label for="all_day">All Day</label>
							<Form.Input type="checkbox" name="all_day" />
							
							<label for="start">Start</label>
							<input type={ this.state.all_day ? 'date' : "datetime" } name="start" value={ moment(selectedDate).format('YYYY-MM-DD') }/>
							
							{ !this.state.all_day 
								? <React.Fragment>
									  <label for="end">End</label>
									  <input type="datetime" name="end" value={ moment(selectedDate).add(5, 'hours').format('YYYY-MM-DD') }/>
								  </React.Fragment>
								: null
							}
						</div>

						<label for="location">Where?</label>
						<input type="text" name="location" placeholder="location" />
						
						{/* GEOLOCATE WITH MAPBOX */}
						<label for="latitude">latitude</label>
						<input type="text" name="latitude" placeholder="latitude" />
						<label for="longitude">longitude</label>
						<input type="text" name="longitude" placeholder="longitude" />

						<label for="company">Agency/Company Name</label>
						<input type="text" name="company" placeholder="company_agency" />
						<label for="reservation">Reservation Number</label>
						<input type="text" name="reservation" placeholder="reservation_number" />
						<label for="notes">Notes</label>
						<input type="area" name="notes" placeholder="notes" />
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
  // postNewEvent: (eventObj) => { dispatch(fetchEventCategories(eventObj)) }
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