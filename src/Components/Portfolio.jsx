import React, {useState} from "react";
import ProjectModal from "./ProjectModal";
import PrisonScapeImage1 from '../../public/images/projects/PrisonScape 1.png';
import PrisonScapeImage2 from '../../public/images/projects/PrisonScape 2.png';
import TwodPlatformer1 from '../../public/images/projects/2dPlatformer1.png';
import TwodPlatformer2 from '../../public/images/projects/2dPlatformer2.png';
import TwodPlatformer3 from '../../public/images/projects/2dPlatformer3.png';


const projectList = [
  {
    title: "PrisonScape",
    description:
      "Collaborated with a team to create a first-person shooter and an endles runner genre game using Unity and C#.",
    detailedDescription:
      "This project was a FPS and endless runner game made in Unity Engine using C#. For this project, I have learned a lot about Unity and C# generally with the Unity specific libraries for game development. I wrote unit tests, created the enemy basic in-game AI, various Unity artifacts used for the game and game related in-world Physics.",
    screenshots: [
      PrisonScapeImage1,
      PrisonScapeImage2
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
      "This project was a 2d platformer game where me and teammates had to use specific design patterns such as Memento, Singleton, Observer, and various others for our in-game functionalities and objects. I have learned so much regarding design patterns and making playable unity games in C#. I have also studied additional design patterns such as Factory and Abstact Factory as part of this project.",
    screenshots: [
      TwodPlatformer1,
      TwodPlatformer2,
      TwodPlatformer3
    ],
    links: {
      github: "https://github.com/414-514-game/2D-Movement",
      youtube: "https://studio.youtube.com/video/dn0sWoTs7iM/edit"
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
      <h2 style={{ textAlign: "center", color: "white" }}>Portfolio</h2>
      <div className="portfolio-container">
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <div>
                <div style={{color:"white"}}> 
                  <h3>{project.title}</h3>
                </div>
                <p className="small">{project.description}</p>
              </div>
              <button onClick={() => openModal(project)}>View Details</button>
            </div>
          ))}
          {selectedProject && (
            <ProjectModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              project={selectedProject}
            />
          )}
        <br></br>
        </div>
      </div>
      <div className="section-border"></div>
    </section>
  );
};

export default Portfolio;
