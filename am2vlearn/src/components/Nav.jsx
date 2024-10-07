import React from 'react'

import home from '../assets/icons/home.svg'
import config from '../assets/icons/config.svg'
import dowload from '../assets/icons/download.svg'

import '../styles/components/Nav.css'
const Nav = ( ) => {
  return (
    <div className='app-css'>
      <div className='nav'>
        <button><img src={home} alt={home} /></button>
        <button><img src={dowload} alt={dowload} /></button>
        <button><img src={config} alt={config} /></button>
      </div>
    </div>
  )
}

export default Nav
