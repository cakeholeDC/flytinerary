import React from 'react'
import { Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


class TravelerCard extends React.Component {

	loadTravelerProfile = () => {
		this.props.history.push(`/traveler/${this.props.traveler.id}`)
	}


	render(){
		console.log(this.props)
		
		let { id, name, age, gender } = this.props.trip

		return(
			<Card
				onClick={ this.loadTravelerProfile }
			    image="https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"
			    header={ name }
			    meta={ `${age} years` }
			    description={gender}
			    extra={ `XXXX trips upcoming`  }
			  />
		)
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    trips: state.trips,
  }
}

export default withRouter(connect(mapStateToProps)(TravelerCard))