import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Portfolio.png";
import IMG2 from "../../assets/spacebook.png";
import IMG3 from "../../assets/grandma.png";
import IMG4 from "../../assets/Digital.png";
import IMG5 from "../../assets/javascript.png";
import IMG6 from "../../assets/TO-DO-LIST.png";
import IMG7 from "../../assets/news.png";
import IMG8 from "../../assets/CRM.png";
import IMG9 from "../../assets/REACT JS TECHNOLOGY.png";

// By using MAP()

const data = [
  {
    id: 1,
    image: IMG9,
    title:
      "Payroll Management System : A software solution that automates payroll processes, including salary calculation, attendance tracking, and tax compliance, ensuring accurate and timely payments.",
    github: "#",
    demo: "#",
  },
  {
    id: 1,
    image: IMG8,
    title:
      "Customer Relationship Management : A tool to manage customer interactions, improve relationships, and streamline workflows through features like contact management, lead tracking, and analytics.",
    github: "#",
    demo: "#",
  },
  {
    id: 1,
    image: IMG7,
    title:
      "News Application :  Users can explore news related to finance, sports, crypto and technology,through API integration",
    github: "https://github.com/SunilDharawat/Newsletter_Web_Application",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    image: IMG1,
    title:
      "Personal Portfolio Website by using ReactJS Technology Where I describe my work",
    github: "https://github.com/SunilDharawat/Portfolio-Website",
    demo: "https://personal-portfolio-reactwebsite.netlify.app/",
  },
  {
    id: 3,
    image: IMG6,
    title:
      "A project management to-do list is a collection of tasks that outlines or team plans to complete during a project.",
    github: "https://github.com/SunilDharawat/To-Do-list-Project",
    demo: "https://to-do-list-webapplication-com.netlify.app/",
  },
  {
    id: 4,
    image: IMG2,
    title:
      "It is a clone of Facebook website, where we built front-end by using react components",
    github: "https://github.com/SunilDharawat/spacebook",
    demo: "https://spacebook-clone.netlify.app/",
  },
  {
    id: 5,
    image: IMG3,
    title:
      "It is a static webpage where you can select various types of flavors according to your test",
    github: "https://github.com/SunilDharawat/Bakery-s_web_page",
    demo: "https://grandmabackery.netlify.app/",
  },
  {
    id: 6,
    image: IMG4,
    title:
      "Project based on JavaScript Technology, This is a Digital watch that shows current time and date",
    github:
      "https://github.com/SunilDharawat/Togetcurrent-time-date/tree/main/DynamicProjects",
    demo: "http://digitalwatch-time.netlify.app/",
  },
  {
    id: 7,
    image: IMG5,
    title:
      "It is a Quotes Generator that generates quotes when we clicked on the NEW Quotes Button",
    github: "https://github.com/SunilDharawat/JavaScriptquotegenerator",
    demo: "https://quotes-generator-webpage.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} className="btn" rel="noreferrer" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" rel="noreferrer" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
