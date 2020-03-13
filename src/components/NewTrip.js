import React from 'react'


class NewTrip extends React.Component {
	render (){
		return (
			<React.Fragment>
				<form>
					<input name="search" placeholder="Bali, Indonesia"></input>
					<button type="submit" name='submit' >GO!</button>
				</form>
			</React.Fragment>
		)
	}
}

export default NewTrip