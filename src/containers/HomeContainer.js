import React from 'react'
import TripsContainer from './TripsContainer.js'
import NewTrip from '../components/NewTrip.js'


class HomeContainer extends React.Component {
	render (){
		return (
			<React.Fragment>
				<NewTrip />
				<TripsContainer />
			</React.Fragment>
		)
	}
}

export default HomeContainer