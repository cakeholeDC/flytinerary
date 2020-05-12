import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from '@fullcalendar/list'
// import { Calendar } from '@fullcalendar/core';

import moment from 'moment'

export default class MyCalendar extends React.Component {
  // calendarComponentRef = React.createRef();


	constructor(props){
		super(props)
		
    this.state = {
			events: this.props.events,
      isAgenda: false
		}
	}

  render() {
  	const events = this.state.events
    return (
      <div>
      <FullCalendar 
          eventColor="#ff0000"// BORDER + BACKGROUND
          // eventBorderColor="#ff0000"// BORDER
          // eventBackgroundColor="#ff0000"// BACKGROUND
          ref={ this.calendarComponentRef }
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]} 
          header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            buttonText={{
              today: 'Today',
              month:'Month',
              week:'Week',
              day:'Day',
              list:'Agenda'
            }}
          defaultView="dayGridMonth"//listWeek
          defaultDate={ events[0].start }
          events={ events }
          dateClick={ this.handleDateClick }
          nowIndicator
        />
      </div>
    )
  }

  // toggleView = () => {
  //   let calendar = this.calendarComponentRef.current.getApi();
  //   if (!this.state.isAgenda){
  //     calendar.changeView("listWeek");
      
  //     this.setState({
  //       isAgenda: !this.state.isAgenda
  //     })
  //   } else {
  //     // calendar.changeView("dayGridMonth");
      
  //     this.setState({
  //       isAgenda: !this.state.isAgenda
  //     })
  //   }
  // }

  handleDateClick = arg => {
    debugger
    let newEvent = window.prompt("Would you like to add an event to " + arg.dateStr + " ?")
    // if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
    if (newEvent) {
      this.setState({
        // add new event data
        events: this.state.events.concat({
          // creates a new array
          title: newEvent,
          start: arg.date,
          allDay: arg.allDay
        })
      })
    }
  }

}