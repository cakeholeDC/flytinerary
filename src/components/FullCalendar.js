import React from 'react'
import { connect } from 'react-redux'

// FULL CALENDAR PLUGINS
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from '@fullcalendar/list'

// DEPENDENCIES
import EventModal from './EventModal'
import moment from 'moment'

class MyCalendar extends React.Component {
  // calendarComponentRef = React.createRef();

	constructor(props){
		super(props)
		
    this.state = {
			events: this.props.events,
      isAgenda: false,
      eventModal: false,
      modalData: null
		}
	}

  toggleEventModal = (arg) => {
    this.setState({
      eventModal: !this.state.eventModal,
      modalData: arg
    })
  }
  

  handleDateClick = arg => {
    this.toggleEventModal(arg) 
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
        <EventModal 
          showModal={this.state.eventModal} 
          closeModal={() => this.toggleEventModal()} 
          calendarData={this.state.modalData} 
          trip={this.props.trip} />
      </div>
    )
  }



}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}



export default connect(mapStateToProps)(MyCalendar)