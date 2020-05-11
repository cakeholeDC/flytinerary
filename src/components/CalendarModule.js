import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export const CalendarModule = props => (
  <div>
    <Calendar
      localizer={localizer}
      date={new Date(props.initial)}
      events={props.events}
      startAccessor="start_datetime"
      endAccessor="end_datetime"
      titleAccesor="event_type"
      style={{ height: 500 }}
    />
  </div>
)