import React from 'react'


class NewTrip extends React.Component {
	render (){
		return (
			<div>
				<form>
				<input name="search" placeholder="Bali, Indonesia"></input>
				<button type="submit" name='submit' >GO!</button>
				</form>
			</div>
		)
	}
}

export default NewTrip