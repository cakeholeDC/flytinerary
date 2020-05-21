import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import styled from 'styled-components'

//helpers
import { mapboxGeolocate } from './Mapbox.js'
import { toTitleCase, getNumSuffix } from '../utils/Helpers'

//actions
import { postNewEvent } from '../redux/actions'

const Form = styled.form`
	display: flex;
	flex-direction: column;

	input {
		flex: 1;
		padding: .5rem;
		border: 1px solid lightgray;
		margin: 0 0 .5rem 0;
	}

	select {
		height: 2.429rem;
		border: 1px solid lightgray;
		background-color: #fff;
		margin: 0 0 .5rem 0;
	}

	.btn-container {
		display: flex;
		justify-content: flex-end;
		margin: 1rem 0 0 0;

		button {
			width: max-content;
		}
	}


	textarea {
		border: 1px solid lightgray;
	}

	.event-time {
		display: flex;

		label { margin-right: .5rem; }

		.start-time, .end-time {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-right: 1rem;

			input, label {
				flex: 1;
				justify-content: flex-end;
			}
		}

		.all-day {
			flex: 1;
			margin: 2rem 0 0 1rem;

			label {
				margin-left: .5rem;
			}
		}
	}
` 

class EventModal extends React.Component {
	state = {
		clickDate: null,
		trip: null,
		category: '', 
		user: null,
		title: "",
		start: "12:00",
		end: "14:00",
		all_day: false,
		location: "",
		latitude: null,
		longitude: null,
		company_agency: "",
		reservation_number: null,
		notes: "",
	}

	componentDidMount(){
		// if (props.eventPrefill){
		// 	this.setState({
		// 		...props.eventPrefill
		// 	})
		// }
	}

	handleEventFormChange = (event) => {
		if (event.target.name === "all_day"){
			this.setState({
				all_day: !this.state.all_day
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
		
		this.setState({
			clickDate: this.props.eventPrefill ? this.props.eventPrefill : this.props.clickDate.dateStr
		})
		
		const coordinates = await mapboxGeolocate(this.state.location)
		const start = this.state.allDay ? moment(this.state.clickDate).format() : moment(this.state.clickDate + "T" + this.state.start).format()
		const end = this.state.allDay ? moment(this.state.clickDate).format() : moment(this.state.clickDate + "T" + this.state.end).format()
		
		const eventObj = {
			trip: this.props.trip.id,
			category: Number(this.state.category),
			user: this.props.eventPrefill ? this.props.eventPrefill.id : this.props.currentUser.id,
			title: this.state.title,
			start: start,
			end: end,
			all_day: this.state.all_day,
			location: this.state.location,
			//grab lat/long by geolocating the location name
			latitude: coordinates.latitude,
			longitude: coordinates.longitude,
			company_agency: this.state.company_agency,
			reservation_number: this.state.reservation_number,
			notes: this.state.notes,
		}
		//PATCH REQUEST
		if (this.props.eventPrefill) {
			eventObj.id = this.props.eventPrefill.id
			//this.props.updateEvent(eventObj)
			debugger
		}
		// POST REQUEST
		else {
			this.props.postNewEvent(eventObj)
		}

		this.props.closeModal()
	}

	render(){
		const eventDate = this.props.clickDate ? moment(this.props.clickDate.date).format("dddd, MMMM D") : null
		const eventDaySuffix = getNumSuffix(moment(eventDate).format("D"))

		let prefill = this.props.eventPrefill

		return(
			<Modal
				size="tiny"
			    open={ this.props.showModal }
			    onClose={ this.props.closeModal }
			    closeOnDimmerClick={false}
			    closeOnEscape
			    closeIcon
		    >
				<Modal.Header>{ prefill 
								? `Editing ${prefill.title} on ${eventDate + eventDaySuffix}` 
								: this.props.clickDate 
									? `New Event for ${eventDate + eventDaySuffix}` 
									:  "New Event"
								}
				</Modal.Header>
			    <Modal.Content>
			    	<Form onChange={ this.handleEventFormChange } onSubmit={ this.handleEventFormSubmit }>
						

						<label for="title">Event</label>
						<input
							required
							type="text"
							name="title"
							placeholder="Bill & Ted's Excellent Adventure"
							defaultValue={ prefill ? prefill.title : '' }
						/>

						<label for="category">Type</label>
						<select 
							required
							name="category"
							defaultValue={ prefill ? prefill.category : '' }
						>
							<option disabled value="" style={{ color: "gray"}}>Select a Category</option>
							{ this.props.categories.map(c => <option key={c.name} value={ c.id } name={c.name}>{ toTitleCase(c.name) }</option>) }
						</select>

						<div className="event-time">
							<div className="start-time">
								<label for="start" style={{ color: `${this.state.all_day ? 'rgb(84,84,84)' : 'inherit'}` }}>Start Time</label>
								<input 
									required
									type="time" 
									name="start" 
									placeholder='12:00' 
									defaultValue={ prefill ? moment(prefill.start).format("HH:MM") : this.state.start} 
									disabled={this.state.all_day} 
								/>
							</div>
							<div className="end-time">
							    <label for="end" style={{ color: `${this.state.all_day ? 'rgb(84,84,84)' : 'inherit'}` }}>End Time</label>
							    <input 
							    	required
							    	type="time" 
							    	name="end" 
							    	placeholder='14:00' 
							    	defaultValue={ prefill ? moment(prefill.end).format("HH:MM") : this.state.end}
							    	disabled={this.state.all_day} 
							    />
						    </div>
							<div className="all-day">
								<input 
									type="checkbox" 
									name="all_day" 
									value={ this.state.all_day }
								/>
								<label for="all_day">All Day</label>
							</div>
						</div>

						
						<label for="location">Address or Loction, City, State</label>
						<input
							required
							type="text"
							name="location"
							placeholder="San Dimas, California"
							defaultValue={ prefill ? prefill.location : null}
						/>
						
						<label for="company">Company Reference</label>
						<input 
							type="text"
							name="company_agency"
							placeholder="Pan American Airlines"
							defaultValue={ prefill ? prefill.company_agency : null}
						/>
						
						<label for="reservation">Reservation Name/Number</label>
						<input
							type="text"
							name="reservation_number"
							placeholder="PA 1927"
							defaultValue={ prefill ? prefill.reservation_number : null}
						/>
						
						<label for="notes">Notes:</label>
						<textarea 
							name="notes" 
							rows="4" 
							cols="10" 
							placeholder="Flight has a layover in Chicago."
							defaultValue={ prefill ? prefill.notes : null}
						/>
						
						<div className="btn-container">
							<button type="submit">{ this.props.eventPrefill ? "Submit" : "Add Event" }</button>
						</div>
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