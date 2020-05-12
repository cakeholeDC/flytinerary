import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import moment from 'moment'

export default class Calendar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			events: this.props.events
		}
	}

  render() {
  	const events = this.state.events
    return (
      <FullCalendar 
      	plugins={[ dayGridPlugin ]} 
      	defaultView="agendaWeek" 
      	defaultDate={events[0].start}
      	events={events}
      	dateClick={this.handleDateClick}
      />
    )
  }

  handleDateClick = arg => {
    alert("Would you like to add an event to " + arg.dateStr + " ?")
  }
}