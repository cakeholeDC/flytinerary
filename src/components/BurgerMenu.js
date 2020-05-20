import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class BurgerMenu extends React.Component {
 
  render () {
    return (
      <Menu isOpen={ false } styles={ styles }>
        <NavLink className="menu-item" to='/' exact>Home</NavLink>
		<NavLink className="menu-item" to='/trips' exact>Trips</NavLink>
		<NavLink className="menu-item" to='/travelers' exact>Travelers</NavLink>
		<NavLink className="menu-item" to='/about' exact>About</NavLink>
      </Menu>
    );
  }
}

var styles = {
  // Position and sizing of burger button
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    left: '1.5rem',
    top: '1.5rem',
  },
  // Color/shape of burger icon bars
  bmBurgerBars: {
    background: '#373a47'
  },
  // Color/shape of burger icon bars on hover
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  // Position and sizing of clickable cross button 
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  // Color/shape of close button cross
  bmCross: {
    background: '#bdc3c7'
  },
  // Sidebar wrapper styles
  // Note: Beware of modifying this element as it can break the animations
  // // you should not need to touch it in most cases
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  // General sidebar styles
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  // Wrapper for item list
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  // Individual item
  bmItem: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    margin: '1rem 0',
  },
  // Styling of overlay
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(BurgerMenu)