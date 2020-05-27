import React from 'react'
import TripsContainer from './TripsContainer.js'
import NewTrip from '../components/NewTrip'
import styled from 'styled-components'
import { connect } from 'react-redux'
import moment from 'moment'


const HomePage = styled.div`
	text-align: center;
	padding: 3rem;

	h1{ font-size: 3rem;}


	@media screen and (max-width: 768px) {
	    padding: .5rem 0rem;

	    .header {
	    	flex-direction: column;

	    	.left {
	    		text-align: center;
	    	}
		    
		    .stats  {
		    	width: 95%;
		    }

		    .history {
		    	width: 95%;
		    	margin-top: .5rem;
		    }
	    }

	}

	.header {
		display: flex;
		
	}

	.left {
		background-color: rgba(255, 255, 255, .8);
		border-radius: 25px;
		padding: 1rem 1.5rem;
		text-align: left;
		flex: 1;
		display: flex;
		flex-direction: column;

		h1 {
			margin-top: 0;
		}

		.next-trip {
			font-style: italic;
			font-size: 1.125rem;
		}
	}

	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.history {
		border: 1px solid lightgray;
		border-bottom: 0px;
		margin-bottom: 0px;
		width: 80%;
		margin: auto;
		margin-bottom: 0px;
		font-size: 1rem;
	    text-align: left;
	    padding: .5rem;
	}

	.stats {
		justify-content: space-evenly;
		display: flex;
	    width: 80%;
	    margin: auto;
	    margin-top: 0px;
	    border: 1px solid lightgray;
	    padding: 2rem;

	    .stat {
	    	margin: 0 .5rem;

	    	h1 {
	    	    margin-bottom: 0rem;
	    	}
	    }
	}


`

class HomeContainer extends React.Component {
	render (){
		const upcomingTrips = this.props.trips.filter(trip=> new Date(trip.start) >= new Date())
		const nextTrip = upcomingTrips.length > 0 ? upcomingTrips[0] : null
		const totalTrips = this.props.trips.filter(trip=> new Date(trip.start) < new Date()).length
		// const totalEvents = this.props.trips.forEach(t => t.event_timeline.find(e => e.user_id = this.props.currentUser.id))

		// console.log(totalEvents)

		return (
			<HomePage>
				<div className="header">
					<div className="left">
						<h1>{`Welcome, ${this.props.currentUser.username}`}</h1>
						<p className="next-trip">{nextTrip ? `Your next trip is ${ moment(nextTrip.start).fromNow() }. Are you ready?` : "You have no upcoming trips."}</p>
						<NewTrip />
					</div>
					<div className="right">
						<h3 className="history">Travel Stats</h3>
						<div className="stats">
							<div className="stat">
								<h1 className="number">{ totalTrips }</h1>
								<p>Trips Completed</p>
							</div>
							<div className="stat">
								<h1 className="number">{ upcomingTrips.length }</h1>
								<p>Upcoming Trips</p>
							</div>
							<div className="stat">
								<h1 className="number">{ totalTrips }</h1>
								<p>Total Events</p>
							</div>
						</div>
					</div>
				</div>
				<TripsContainer/>
			</HomePage>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips,
  }
}

export default connect(mapStateToProps)(HomeContainer)