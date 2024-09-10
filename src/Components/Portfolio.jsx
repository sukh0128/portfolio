import React, {useState} from "react";
import ProjectModal from "./ProjectModal";
import PrisonScapeImage1 from '../../public/images/projects/PrisonScape 1.png';
import PrisonScapeImage2 from '../../public/images/projects/PrisonScape 2.png';
import TwodPlatformer1 from '../../public/images/projects/2dPlatformer1.png';
import TwodPlatformer2 from '../../public/images/projects/2dPlatformer2.png';
import TwodPlatformer3 from '../../public/images/projects/2dPlatformer3.png';
import Mortgage1 from '../../public/images/projects/Mortgage 1.png';
import Mortgage2 from '../../public/images/projects/Mortgage 2.png';
import Mortgage3 from '../../public/images/projects/Mortgage 3.png';
import Hadoop1 from '../../public/images/projects/hadoop1.png';
import Hadoop2 from '../../public/images/projects/hadoop2.png';
import Spark1 from '../../public/images/projects/spark1.png';
import Spark2 from '../../public/images/projects/spark2.png';
import Spark3 from '../../public/images/projects/spark3.png';
import Design from '../../public/images/projects/design.png';
import ChatMNG1 from '../../public/images/projects/chatmng1.png';
import ChatMNG2 from '../../public/images/projects/chatmng2.png';
import ChatMNG3 from '../../public/images/projects/chatmng3.png';
import ChatMNG4 from '../../public/images/projects/chatmng4.png';
import Retirement1 from '../../public/images/projects/retirement1.png';
import Retirement2 from '../../public/images/projects/retirement2.png';
import Retirement3 from '../../public/images/projects/retirement3.png';
import ML1 from '../../public/images/projects/ML1.png';
import ML2 from '../../public/images/projects/ML2.png';
import ML3 from '../../public/images/projects/ML3.png';
import ML4 from '../../public/images/projects/ML4.png';

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
    description: ".NET Core MVC and Razor pages application that helps plan your mortgage. It also has a docker component to it, where you can share the docker image.",
    detailedDescription:
      "A very basic MVC application that uses .NET Core and Razor pages to calculate your mortgage. The application is important to demonstrate the use of .NET Core and Razor pages in a web application. The application also has a docker component to it, where you can share the docker image using docker commands",
    screenshots: [
      Mortgage1,
      Mortgage2,
      Mortgage3
    ],
    links: {
      github: "https://github.com/sukh0128/MortGauge",
      youtube: ""
    }  
  },
  {
    title: "Big Data Hadoop and Spark Cluster",
    description:
      "Big Data cluster setup using multiple Virtual Machines in Virtual Box using Hadoop and Spark to simulate a real life big data cluster.",
    detailedDescription:
      "The project was to simulate a real life big data cluster using Apache Hadoop and Spark that would be designed for an online retailer system with data centers and servers distributed across multiple cities in different geological locations, such as New York and Tokyo.",
    screenshots: [
      Hadoop1,
      Hadoop2,
      Spark1,
      Spark2,
      Spark3,
      Design
    ],
    links: {
      github: "https://github.com/sukh0128/CIS602-Final-Project",
      youtube: ""
    }
  },
  {
    title: "ML model deployment using Docker and Kubernetes",
    description:
      "Deployed a machine learning model using Docker and Kubernetes to simulate a real life scenario and demonstrate the integration of containerization and orchestration with Machine Learning models.",
    detailedDescription:
      "The app is a simple flask python app that does the bare minimum, but the main focus of the project was to demonstrate the deployment of a machine learning model using Docker and Kubernetes which serves 3 replicas of the container to account for high availability. The project is important to demonstrate the integration of containerization and orchestration with Machine Learning models.",
    screenshots: [
      ML1,
      ML2,
      ML3,
      ML4
    ],
    links: {
      github: "https://github.com/sukh0128/CIS602-Final-Project"
    }  
  },
  {
    title: "Retirement Planner",
    description:
      "A full stack application that uses .NET Core back-end project and React front-end project to plan for your retirement. Imporant project to demonstrate the integrating separate back-end and front-end projects.",
    detailedDescription:
    "A full stack application that uses .NET Core back-end project and React front-end project to plan for your retirement. Imporant project to demonstrate the integrating separate back-end and front-end projects.",
    screenshots: [
      Retirement1,
      Retirement2,
      Retirement3
    ], 
    links: {
      github: "https://github.com/sukh0128/RetireEarly"
    }  
  },
  {
    title: "Chat-MNG",
    description:
      "A full stack application that uses .NET Core back-end project and React front-end project to demonstrate a real-time chat application. The project is important to demonstrate integrating different APIs such as GoogleTranslate and OpenAI in your application.",
    detailedDescription:
      "A full stack application that uses .NET Core back-end project and React front-end project to demonstrate a real-time chat application. The project is important to demonstrate integrating different APIs such as GoogleTranslate and OpenAI in your application.",
    screenshots: [
      ChatMNG1,
      ChatMNG2,
      ChatMNG3,
      ChatMNG4
    ],    
    links: {
      github: "https://github.com/sukh0128/chatMNG"
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
