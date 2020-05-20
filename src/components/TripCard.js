import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { displayTripCardDateRange } from '../utils/Helpers'

import styled from 'styled-components'

const Card = styled.div`
	@media screen and (max-width: 768px) {
	    width: 100vw;
	    height: 15rem;
	    margin: .5rem 0;
	}

	width: 18rem;
    height: 10rem;
	margin: .5rem .5rem;

	img {
		width: 100%;
	    height: 100%;
		object-fit: cover;
		
	}
    
	.trip-content-flex {
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: absolute;
		width: inherit;
	    height: inherit;
		
		-webkit-transition: background-color .75s;

		&:hover{
			background-color: rgba(203, 203, 203, 0.3);
		}
	}

	.trip-overlay {
	    background-color: rgba(0,0,0,.5);
	    padding: .6rem;
	}

    p {
    	color: #fff;
    	margin-bottom: 0px;
	    
	    &.trip-name {
	    	font-weight: bold;
	    }

	    &.trip-dates{
	    	font-size: .8em;
	    }
    }

    .trip-metrics-flex {
    	display:flex;
	    
	    .trip-travelers,
		.trip-events {
			flex: 1;
	    	font-size: .75em;
	    	font-style: italic;
	    }

	    .trip-events {
	    	text-align: right;
	    }
    }

    .trip-details-flex {
    	display:flex;
	    
	    .trip-name,
		.trip-location {
			flex: 1;
	    	font-size: .75em;
	    	font-style: italic;
	    }

	    .trip-location {
	    	text-align: right;
	    }
    }
`

class TripCard extends React.Component {

	loadTripShowPage = () => {
		this.props.history.push(`/trips/${this.props.trip.id}`)
	}

	render(){
		let { title, destination, image, start, end, organizer, attendees, event_timeline } = this.props.trip

		let dates = displayTripCardDateRange(start, end)
		let travelers = `${attendees.length} Attendee${attendees.length > 1 || attendees.length === 0 ? "s" : '' }`
		let events = `${event_timeline.length} Event${event_timeline.length > 1 || event_timeline.length === 0 ? "s" : '' }`
		
		return(
			<Card className="trip-card" onClick={ this.loadTripShowPage }>
				<div className="trip-content-flex">
					<div className="trip-overlay" >
						<p className="trip-name">{ title }</p>
						<div className='trip-details-flex'>
							<p className="trip-dates">{ dates }</p>
							<p className="trip-location">{ destination }</p>
						</div>
						<div className='trip-metrics-flex'>
							<p className="trip-travelers">{ travelers }</p>
							<p className="trip-events">{ events }</p>
						</div>
					</div>
				</div>
				<img src={image} alt={destination} onError={ event => event.target.src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3372&q=80" }/>
			</Card>
		)
	}
}

export default withRouter(TripCard)
