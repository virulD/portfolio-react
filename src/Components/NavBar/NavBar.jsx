/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/Vad.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { NavLink} from 'react-router-dom'

const NavBar = () => {
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = '0';
    }
    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    }
  return (
      <div className='NavBar'>
          <img className="logo" src={logo} alt="" />
          <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
          <ul ref={menuRef} className='nav-menu'>
              <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
              <li ><NavLink to='/'className={({isActive})=>(isActive?"active":"")}>Home</NavLink></li>
              <li><NavLink to="/about-me" className={({isActive})=>(isActive?"active":"")}>About Me</NavLink></li>
              <li><NavLink to="/Services" className={({isActive})=>(isActive?"active":"")}>Services</NavLink></li>
          </ul>

          <div className='btn-conactme' onClick={() => window.open('https://www.linkedin.com/in/virul-akbo-de-silva-64a693255', '_blank')}>
              Contact Me
          </div>
      </div>
  )
}

export default NavBar