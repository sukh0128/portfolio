import React, {useState} from "react";
import ProjectModal from "./ProjectModal";
import EricImage from '../../public/images/Eric.jpg';
import PrisonScapeImage from '../../public/images/projects/PrisonScape 2.png';

const projectList = [
  {
    title: "PrisonScape",
    description:
      "Collaborated with a team to create a first-person shooter and an endles runner genre game using Unity and C#.",
    detailedDescription:
      "This project was a FPS and endless runner game made in Unity Engine using C#. For this project, I have learned a lot about Unity and C# generally with the Unity specific libraries for game development. I wrote unit tests, created the enemy basic in-game AI, various Unity artifacts used for the game and game related in-world Physics.",
    screenshots: [
      EricImage,
      PrisonScapeImage
    ],
    links: {
      github: "https://github.com/PrisonScape-Game/PrisonScape",
      youtube: "https://www.youtube.com/watch?v=4JQHMo8naw8"
    },
  },
  {
    title: "2D Platformer Game",
    description:
      "Worked with a team to create a 2D platformer game using Unity and C#. We used many different design patterns to make the game more efficient and scalable.",
    detailedDescription:
      "",
    screenshots: [

    ],
    links: {
      github: "",
      youtube: ""
    }
  },
  {
    title: "Mortgage Calculator",
    description: ".NET Core MVC application that helps plan your mortgage.",
    detailedDescription:
      "",
    screenshots: [

    ],
    links: {
      github: "",
      youtube: ""
    }  
  },
  {
    title: "Big Data Hadoop and Spark Cluster",
    description:
      "Big Data cluster setup using multiple Virtual Machines in Virtual Box using Hadoop and Spark to simulate a real life big data cluster.",
    detailedDescription:
      "",
    screenshots: [

    ],
    links: {
      github: "",
      youtube: ""
    }
  },
  {
    title: "ML model deployment using Docker and Kubernetes",
    description:
      "Deployed a machine learning model using Docker and Kubernetes to simulate a real life scenario and demonstrate the integration of containerization and orchestration with Machine Learning models.",
    detailedDescription:
      "",
    screenshots: [

    ],
    links: {
      github: "",
      youtube: ""
    }  
  },
  {
    title: "Retirement Planner",
    description:
      "A full stack application that uses .NET Core back-end project and React front-end project to plan for your retirement. Imporant project to demonstrate the integrating separate back-end and front-end projects.",
    detailedDescription:
      "",
    screenshots: [

    ], 
    links: {
      github: "",
      youtube: ""
    }  
  },
  {
    title: "Chat-MNG",
    description:
      "A full stack application that uses .NET Core back-end project and React front-end project to demonstrate a real-time chat application. The project is important to demonstrate integrating different APIs such as GoogleTranslate and OpenAI in your application.",
    detailedDescription:
      "",
    screenshots: [

    ],    
    links: {
      github: "",
      youtube: ""
    }  
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };


  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", color: "white"}}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.links} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              <button style={{color: "black"}} onClick={() => openModal(project)}>View Details</button>
            </div>
          ))}
          {selectedProject && (
            <ProjectModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            project={selectedProject}
            />
          )}
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
