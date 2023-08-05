import React from 'react'
import './experience.css';
import {BsPatchCheckFill } from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>Skills That I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="icons" />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
             <article className="experience-details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>  
            </article>
             <article className="experience-details">
              <BsPatchCheckFill className="icons" />
              <div><h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>  
            </article>
             <article className="experience-details">
              <BsPatchCheckFill className="icons" />
              <div> <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
             </div>  
            </article>
             <article className="experience-details">
              <BsPatchCheckFill className="icons" />
              <div><h4>ReactJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
            <article className="experience-details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Web Design</h4>
              <small className='text-light'>Beginner</small>
           </div>
             </article>
          </div>
        </div>
        <div className="experience-backend">
           <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="icons"  />
              <div>   <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
         </div>
              </article>
             <article className="experience-details">
              <BsPatchCheckFill className="icons" />
            <div> <h4>J2EE</h4>
              <small className='text-light'>Intermediate</small>
           </div> 
            </article>
             <article className="experience-details">
              <BsPatchCheckFill className="icons" />
            <div><h4>JDBC</h4>
              <small className='text-light'>Intermediate</small>
            </div>  
            </article>
             <article className="experience-details">
              <BsPatchCheckFill className="icons" />
            <div> <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
           </div> 
            </article>
             <article className="experience-details">
              <BsPatchCheckFill className="icons" />
            <div> <h4>Mysql</h4>
              <small className='text-light'>Intermediate</small>
          </div> 
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="icons" />
            <div>  <h4>Servlet</h4>
              <small className='text-light'>Beginner</small>
         </div>
            </article>
          </div>

        </div>
      </div>
     </section>
  )
}

export default Experience