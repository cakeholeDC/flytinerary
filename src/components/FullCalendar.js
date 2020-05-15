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
  calendarComponentRef = React.createRef();

  state = {
    showEventModal: false,
    clickDate: null,
    eventPrefill: null
	}

  toggleEventModal = () => {
    this.setState({
      showEventModal: !this.state.showEventModal,
    })
  }
  

  handleDateClick = date => {
    this.setState({
      clickDate: date
    })
    this.toggleEventModal()
  }

  handleEventClick = e => {
    console.log(e)
    const { id, title, allDay, start, end, extendedProps } = e.event

    // TRIP ADMIN => this.props.trip.organizer.id === this.props.currentUser.id
    if (this.props.currentUser.id === extendedProps.user || this.props.trip.organizer.id === this.props.currentUser.id){
      const eventObj = {
        id: Number(id),
        trip: this.props.trip.id,
        category: extendedProps.category,
        user: extendedProps.user,
        title: title,
        start: start,
        end: end,
        all_day: allDay,
        location: extendedProps.location,
        // //grab lat/long by geolocating the location name
        latitude: extendedProps.latitude,
        longitude: extendedProps.longitude,
        company_agency: extendedProps.company_agency,
        reservation_number: extendedProps.reservation_number,
        notes: extendedProps.notes,
      }
      this.setState({
        eventPrefill: eventObj
      })

      this.toggleEventModal()
    }

    // event does not belong to user or currentUser is not trip admin
    else alert("You are not authorized to edit this event")

  }

  render() {
  	const events = this.props.events
    const defaultDate = events.length > 0 ? events[0].start : moment().format()

    return (
      <div>
      <FullCalendar 
          // eventColor="#ff0000"// BORDER + BACKGROUND
          ref={ this.calendarComponentRef }
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]} 
          //add header buttons
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
          }}
          //override default button text
          buttonText={{
            today: 'Today',
            month:'Month',
            week:'Week',
            day:'Day',
            list:'Agenda'
          }}
          defaultView="dayGridMonth"//listWeek
          defaultDate={ defaultDate }
          events={ events }
          // editable
          eventClick={ this.handleEventClick }
          // eventDrop={ (e) => console.log("drop", e)}
          dateClick={ this.handleDateClick }
          nowIndicator
        />
        <EventModal
          showModal={this.state.showEventModal} 
          closeModal={() => this.toggleEventModal()} 
          clickDate={this.state.clickDate} 
          trip={this.props.trip} 
          eventPrefill={ this.state.eventPrefill }
         />
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