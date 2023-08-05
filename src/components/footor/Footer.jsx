import React from 'react'
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">Portfolio</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Technical Summary</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Personal Details</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer-copyright">
        <small> &copy; All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer