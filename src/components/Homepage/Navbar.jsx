import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/indicator.svg'

function Navbar({children}) {
    const [active, setActive] = useState(0);
    const navItems = [
        {
          path: "profile",
          name: "Profile",
        },
        {
          path: "posts",
          name: "Posts",
        },
        {
          path: "gallery",
          name: "Gallery",
        },
        {
          path: "todo",
          name: "ToDo",
        },
      ]

      const handleActive = index => setActive(index)


  return (
    <div className='container'>
        <div className="sidebar">
        {
          navItems.map((item, index) => (
            <NavLink to={item.path} key={index} className={`link ${active === index ? 'active': ''}`} onClick={() => handleActive(index)}>
              {item.name}
              {active === index && <img src={logo} alt="indicator" className='indicator'/>}
            </NavLink>
          ))
        }
        </div>
        <main className='main'>{children}</main>
        </div>
  )
}

export default Navbar