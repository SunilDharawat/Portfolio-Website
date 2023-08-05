import React from 'react'
import './header.css';
import CTA from './CTA.jsx'
import ME from '../../assets/boy1.png'
import HeaderIcons from './HeaderIcons';
function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Sunil Dharawat</h1>
        <h5 className="text-light">Java Fullstack Developer</h5>
        <CTA />
        <HeaderIcons/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down </a>

      </div>
    </header>
  )
}

export default Header