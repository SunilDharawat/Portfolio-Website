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
            <h3>Programming Language</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Good knowledge of OOPs concept like Polymorphism, Inheritance
                etc.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Good practical knowledge of Collections, Framework etc.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Implemented custom sorting using comparator.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Good Architectural understanding of JDBC and Loose coupling.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Implemented JDBC transaction by using Bank transaction.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p> Good understanding of RDBMS concepts in database.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Comfortable in writing SQL statements like DML query.</p>
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
              <p>
                Good knowledge in JavaScript concepts like functions/methods.
              </p>
            </li>
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
        {/* End of Web development */}
        <article className="service">
          <div className="service-head">
            <h3>Database Technology</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Good knowledge of Structured Query Langauge (SQL).</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Practice in Oracle database as well as Mysql platform.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Good understanding of RDBMS concepts in database.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Comfortable in writing SQL statements like DML query.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Comfortable in writing SQL statements like DQL query.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Comfortable in writing SQL statements like DDL query.</p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
      </div>
    </section>
  );
}

export default Services