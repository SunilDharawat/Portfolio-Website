import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import  { React,useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_tkrl9qe",
         "template_hpb7zqu",
         form.current,
         "ER-9KiuOjuOkAjI7w"
     )
     e.target.reset();

   };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>sunildharawal2001@gmail.com</h5>
            <a href="mailto:sunildharawal2001@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <FiLinkedin className="contact-option-icon" />
            <h4>Linkedin</h4>
            <h5>SunilDharawat</h5>
            <a
              href="https://www.linkedin.com/in/sunil-dharawat-a6726831a/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <FaGithub className="contact-option-icon" />
            <h4>GitHub</h4>
            <h5>SunilDharawat</h5>
            <a
              href="https://github.com/SunilDharawat?tab=repositories"
              target="_blank"
            >
              Check Code 
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact
