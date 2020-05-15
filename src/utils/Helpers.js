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

export function getCategoryColor(category){
	switch(category.toLowerCase()) {
		case "flight":
			return "#BF0D3E"
		case "lodging":
			return "#009CDE"
		case "reservation":
			return "#FFD100"
		case "meal":
			return "#00B140"
		case "other":
			return "#ED8B00"
		
	}
}

export function toTitleCase(str){
	str = str.toLowerCase().split(' ');
	let final = [ ];
   
	for(let word of str){
      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }

	return final.join(' ')
}

export function getNumSuffix(num) {
  if (num > 3 && num < 21) return 'th';
  switch (num % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}