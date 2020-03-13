import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'



class NavBar extends React.Component {
	render(){
		return(
			<Menu 
				id="nav-bar"
				size="huge"
			>
		        <NavLink to='/' exact>
					<Menu.Item name='home'>Home</Menu.Item>
				</NavLink>

				<NavLink to='/trips' exact>
		        	<Menu.Item name='trips'>Trips</Menu.Item>
				</NavLink>

				<NavLink to='/travelers' exact>
					<Menu.Item name='travelers'>Travelers</Menu.Item>
				</NavLink>

				<NavLink to='/about' exact>
		        	<Menu.Item name='trips'>About</Menu.Item>
				</NavLink>

				<Menu.Menu position="right" >
					<Menu.Item>
						<NavLink to='/profile' exact>
							Login / Profile
						</NavLink>
					</Menu.Item>
				</Menu.Menu>
	      	</Menu>
		)
	}
}

export default NavBar