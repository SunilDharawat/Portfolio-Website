import React from "react";
import "./about.css";
import Img from "../../assets/boy1.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
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
              <small>Trainee Software Engineer (+4 Month Experience)</small>
            </article>
            <article className="about-card">
              <FaUserGraduate className="about-icons" />
              <h5>Certifications</h5>
              <small>Web Development Course </small>
              <small>In ReactJs Technology</small>
            </article>
            <article className="about-card">
              <a href="#portfolio">
                <VscFolderLibrary className="about-icons" />
                <h5>Projects</h5>
                <small>2 Major Projects & </small>
                <small>5+ Minor Projects Completed</small>
              </a>
            </article>
          </div>

          <p>
            My name is <strong>Sunil Dharawat</strong>. I am originally from
            <strong> Bhanpura</strong> (Mandsour) but currently residing in
            Indore. I recently graduated from <strong>RGPV University </strong>
            with a degree in <strong>Computer Science Engineering</strong> from
            <strong> PCST College</strong>, Indore. Additionally, I have
            completed a<strong> Web Development Course</strong> from Pentagon
            Space, Bangalore, and I am currently working as a{" "}
            <strong>Trainee Software Engineer</strong> at
            <strong> SysAssist IT Solutions</strong>.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
