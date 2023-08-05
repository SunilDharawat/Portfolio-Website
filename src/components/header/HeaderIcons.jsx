import React from 'react'
import {BsLinkedin,BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
function HeaderIcons() {
  return (
    <div className="header-icons">
      <a href="https://www.linkedin.com/in/sunildharawat/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/SunilDharawat" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderIcons