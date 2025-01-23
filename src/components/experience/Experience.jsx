import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <section id="experience">
      <h5>Skills That I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <div>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            <div>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  {" "}
                  <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            <div>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>ReactJs</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            <div>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>ShadCN UI</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>Web Design</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
            <div>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>React Hook Form</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>Complex Validation (Yup, Zod)</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
