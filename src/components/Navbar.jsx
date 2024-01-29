import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

    <div className='nav'>

        <div className='icon'>
            Icon
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