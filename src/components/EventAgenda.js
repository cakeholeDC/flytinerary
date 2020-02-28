import React from 'react'

class EventAgenda extends React.Component {

	isDateNew(event) {

	}


	render(){
		return(
			<ul>Agenda
				{ this.props.events.map(event => <li>{ event.event_type }</li>) }
			</ul>
		)
	}
}

export default EventAgenda


//@TODO

// 1. List in agenda view: UL with date header, events with the same date all are inidivual LI's

	// FOR EACH Event
		//Grab the date
		// check if the date is different than the previous (initial is null, so always different)
		// if the date is unique, add a UL with the date
			//THEN, grab the start times
			// LIST THE EVENTS


// 2. SWITCH details based on event_type