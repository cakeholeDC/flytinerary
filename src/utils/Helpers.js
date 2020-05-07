import * as moment from 'moment'

export function displayTripCardDateRange(tripStart, tripEnd) {
		const start = moment(tripStart)
		const end = moment(tripEnd)

		// does the event occurr within a single year?
		if (start.format('YYYY') === end.format('YYYY')) {
			// does the event occurr within the a single month?
			if (start.format("MM") === end.format("MM")) {
				return `${start.format("MMM D")} – ${end.format("D, YYYY")}`
			} else {
				return `${start.format("MMM D")} – ${end.format("MMM D, YYYY")}`
			}
		} else {
			// the event does not occur within a single year, and therefore cannot occurr within a single month
			return `${start.format("MMM D, YYYY")} – ${end.format("MMM D, YYYY")}`
		}
	}