import React from 'react'
import './about.css';
import Img from '../../assets/boy1.png'
import { FaAward } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import { FaUserGraduate } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Img} alt="me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icons" />
              <h5>Experience</h5>
              <small>Fresher (seeking for job)</small>
            </article>
            <article className="about-card">
              <FaUserGraduate className="about-icons" />
              <h5>Certifications</h5>
              <small>Java Fullstack Course</small>
            </article>
            <article className="about-card">
              <a href="#portfolio">
                <VscFolderLibrary className="about-icons" />
                <h5>Projects</h5>
                <small>5+ Completed Projects</small>
              </a>
            </article>
          </div>

          <p>
            My name is <strong>Sunil Dharawat</strong>. I am basically from
            <strong> Bhanpura</strong> (Mandsour), But currently living in
            Indore. Recently, I graduated from <strong>RGPV University</strong>{" "}
            with a degree in <strong>Computer Science Engineering</strong> from{" "}
            <strong>PCST College</strong> Indore. and Now pursuing{" "}
            <strong>JAVA FULLSTACK COURSE</strong> from Pentagon Space
            Bengalore.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About