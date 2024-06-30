import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website help</h2>
      <p>loremsdddddddddddddddddddddddddddddddddddddddddd</p>

        <nav>
            <NavLink to='faq'>View the faq</NavLink>
            <NavLink to='contact'>Contact us</NavLink>
        </nav>


        <Outlet />
    
    </div>
  )
}

export default HelpLayout
