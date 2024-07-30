import React from 'react'
import './services.css';
import { BiCheck } from "react-icons/bi";
function Services() {
  return (
    <section id="services">
      <h5>What I Learn</h5>
      <h2>Technical Summary</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Programming Language(Js)</h3>
          </div>

          <ul className="service-list">
           <li>
              <BiCheck className="service-list-icon" />
              <p>
              Implement features like form validation, buttons, and menus that respond to user clicks or input.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Modify the Document Object Model (DOM) to alter page structure and content.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
              Respond to events like clicks, mouse movements, and keyboard input.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Access browser-specific features (e.g., geolocation, local storage).</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX  */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Good understanding of HTML tags and attributes.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Good understanding of CSS property like Box-Model etc.</p>
            </li>
           <li>
              <BiCheck className="service-list-icon" />
              <p>Create smooth animations and transitions.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>CSS allows you to control how HTML elements look in a web browser.</p>
            </li>
          </ul>
        </article>
        {/* End of Web development */}
        <article className="service">
          <div className="service-head">
            <h3>ReactJs Technology</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Good Practical knowledge of ReactJs Technology. </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Implemented Functional and Class components of React.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Good understanding of props, state, hooks and usestate.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Implemented ReactJs technology in many projects to improve
                knowledge.
              </p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
      </div>
    </section>
  );
}

export default Services
