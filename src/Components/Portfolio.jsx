import React from "react";

const projectList = [
  {
    title: "PrisonScape",
    description:
      "Collaborated with a team to create a first-person shooter and an endles runner genre game using Unity and C#.",
    url: "",
  },
  {
    title: "2D Platformer Game",
    description:
      "Worked with a team to create a 2D platformer game using Unity and C#. We used many different design patterns to make the game more efficient and scalable.",
    url: "",
  },
  {
    title: "Mortgage Calculator",
    description: ".NET Core MVC application that helps plan your mortgage.",
    url: "",
  },
  {
    title: "Big Data Hadoop and Spark Cluster",
    description:
      "Big Data cluster setup using multiple Virtual Machines in Virtual Box using Hadoop and Spark to simulate a real life big data cluster.",
    url: "",
  },
  {
    title: "ML model deployment using Docker and Kubernetes",
    description:
      "Deployed a machine learning model using Docker and Kubernetes to simulate a real life scenario and demonstrate the integration of containerization and orchestration with Machine Learning models.",
    url: "",
  },
  {
    title: "Retirement Planner",
    description:
      "A full stack application that uses .NET Core back-end project and React front-end project to plan for your retirement. Imporant project to demonstrate the integrating separate back-end and front-end projects.",
    url: "",
  },
  {
    title: "Chat-MNG",
    description:
      "A full stack application that uses .NET Core back-end project and React front-end project to demonstrate a real-time chat application. The project is important to demonstrate integrating different APIs such as GoogleTranslate and OpenAI in your application.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", color: "white"}}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="section-border"></div>
    </section>
  );
};

export default Portfolio;
