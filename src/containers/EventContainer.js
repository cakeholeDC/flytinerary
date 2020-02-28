import React from 'react'
import EventAgenda from '../components/EventAgenda.js'

class EventContainer extends React.Component {
	state = {
		displayType: "agenda"
	}

	render(){
		switch (this.state.displayType){
			case "agenda":
				return <EventAgenda events={this.props.events} />
			default:
				return <div>DEFAULT VIEW</div>
		}
	}
}

export default EventContainer

// ADD SWITCH FOR VIEW TYPE
// -AGENDA = timeline
// -CALENDAR = GRID
// -PERSONAL = ONLY USER SPECIFIC

//FOR FLIGHTS


//FOR CARS


//FOR TRAINS


//FOR LODGING


//FOR RESERVATION