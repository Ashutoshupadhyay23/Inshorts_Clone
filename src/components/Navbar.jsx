import React from 'react'
import './Navbar.css'
import HamburgerDrawer from './HamburgerDrawer'

const Navbar = ({setCategory}) => {
  return (

    <div className='nav'>

        <div className='icon'>
            <HamburgerDrawer setCategory={setCategory} />
        </div>

        <img 
         src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
         alt="logo" 
         height='80%'
         style={{ cursor: 'pointer'}}
        />

    </div>
    
  )
}

export default Navbar