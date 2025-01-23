import React from 'react'
import {BsLinkedin,BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
function HeaderIcons() {
  return (
    <div className="header-icons">
      <a href="https://www.linkedin.com/in/sunil-dharawat-a6726831a/" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/SunilDharawat"  rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com" rel="noreferrer"  target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderIcons
