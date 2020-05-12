import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)


export default class CalendarModule extends React.Component{
	constructor(props) {
		super(props)

		this.state ={
			defaultView: new Date(this.props.trip.start_datetime),
			...this.props.trip
		}
	}

	advanceCalendar = (event) =>{
		this.setState({
			defaultView: new Date(event),
		})
	}

	onEventResize = (type, { event, start, end, allDay }) => {
	    // this.setState(state => {
	    //   state.events[0].start = start;
	    //   state.events[0].end = end;
	    //   return { events: state.events };
	    // });
	  };

	  onEventDrop = ({ event, start, end, allDay }) => {
	    console.log(start);
	  };


	render(){
	 	const { defaultView, event_timeline } = this.state
	 	// const { events } = this.props
	 	// console.log(trip.event_timeline)
		return(
		    <Calendar
		      localizer={localizer}
		      defaultView="agenda"
		      defaultDate={ defaultView  }
		      onNavigate={ this.advanceCalendar }
		      events={ event_timeline }
		      startAccessor="start_datetime"
		      endAccessor="end_datetime"
		      titleAccessor="event_type"
		      style={{ height: 500 }}
		      onSelectEvent={(e) => console.log('single click', e)}
		      onDoubleClickEvent={e => console.log('doubleclick', e)}
		    />
		)
	}
}