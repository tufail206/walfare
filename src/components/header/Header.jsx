import React from 'react'
import { NavLink } from 'react-router-dom'
import { Paths } from '../../utils/PathConstant'

const Header = () => {
  return (
    <header className='py-6'>
      <div className="container mx-auto flex justify-between items-center">
              <h1 className='text-2xl font-semibold text-primary'>Ummat Welfare Organization</h1>
        <ul className="desktop-ul flex gap-7">
            <li>
                <NavLink to={Paths.HOME}>Home</NavLink>
            </li>
            <li>
                <NavLink to={Paths.ABOUT}>About</NavLink>
            </li>
            <li>
                <NavLink to={Paths.CONTACT}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={Paths.ACTIVITIES}>Activites</NavLink>
            </li>
            <li>
                <NavLink to={Paths.GALLERY}>Gallery</NavLink>
            </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
