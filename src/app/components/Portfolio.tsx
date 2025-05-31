"use client";

import React, {useState} from "react";
import ProjectModal from "./ProjectModal";
import { useAnalytics } from "./Analytics";


const projectList = [
  {
    title: "PrisonScape",
    description:
      "Collaborated with a team to create a first-person shooter and an endles runner genre game using Unity and C#.",
    detailedDescription:
      "This project was a FPS and endless runner game made in Unity Engine using C#. For this project, I have learned a lot about Unity and C# generally with the Unity specific libraries for game development. I wrote unit tests, created the enemy basic in-game AI, various Unity artifacts used for the game and game related in-world Physics.",
    screenshots: [
      "/projects/PrisonScape 1.png",
      "/projects/PrisonScape 2.png"
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
      "/projects/2dPlatformer1.png",
      "/projects/2dPlatformer2.png",
      "/projects/2dPlatformer3.png"
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
      "/projects/Mortgage 1.png",
      "/projects/Mortgage 2.png",
      "/projects/Mortgage 3.png"
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
      "/projects/hadoop1.png",
      "/projects/hadoop2.png",
      "/projects/spark1.png",
      "/projects/spark2.png",
      "/projects/spark3.png",
      "/projects/design.png"
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
      "The app is a simple flask python app that does the bare minimum, but the main focus of the project was to demonstrate the deployment of a machine learning model using Docker and Kubernetes which serves 3 replicas of the container to account for high availability. The project is important to demonstrate the integration of containerization and orchestration with Machine Learning models.",
    screenshots: [
      "/projects/ML1.png",
      "/projects/ML2.png",
      "/projects/ML3.png",
      "/projects/ML4.png"
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
      "/projects/retirement1.png",
      "/projects/retirement2.png",
      "/projects/retirement3.png"
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
      "/projects/chatmng1.png",
      "/projects/chatmng2.png",
      "/projects/chatmng3.png",
      "/projects/chatmng4.png"
    ],    
    links: {
      github: "https://github.com/sukh0128/chatMNG"
    }  
  },
  {
    title: "Python HTTP/1.1 Server",
    description:
      "Using the Code Crafers' HTTP/1.1 Server challenge, created a simple HTTP/1.1 server using Python. The project is important to demonstrate the understanding of the HTTP protocol and how it works.",
    detailedDescription:
      "Furthermore this project and challenge helpful to refine my python specific skills and understanding of the HTTP protocol and how it works. It also proved helpful in testing multi threaded application and servers.",
    screenshots: [
      "/projects/HTTP1.png",
      "/projects/HTTP2.png"
    ],
    links: {
      github: "https://github.com/sukh0128/CodeCrafters-HTTP-Server-Python"
    }
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectList[0] | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { trackProjectView } = useAnalytics();

  const openModal = (project: typeof projectList[0]) => {
    setSelectedProject(project);
    setModalIsOpen(true);
    trackProjectView(project.title);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const sectionStyle = {
    position: 'relative' as const,
    width: '100%',
    padding: '2rem 0',
    backgroundColor: 'black',
    fontFamily: '"Montserrat", sans-serif',
    WebkitFontSmoothing: 'antialiased' as const,
    MozOsxFontSmoothing: 'grayscale' as const,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  };

  const h2Style = {
    fontSize: '3rem',
    fontWeight: 400,
    margin: 0,
    paddingTop: '5rem',
    paddingBottom: '2rem',
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
    textAlign: 'center' as const,
  };

  const portfolioContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const,
    paddingTop: '1rem',
    width: '100%',
  };

  const containerStyle = {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: '330px 300px',
    margin: '1rem auto',
    justifyContent: 'center',
  };

  const boxStyle = {
    borderRadius: '10px',
    border: '1px solid rgb(204, 204, 204)',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    padding: '24px 16px',
    textAlign: 'center' as const,
    minHeight: '300px',
    fontFamily: '"Montserrat", sans-serif',
    backgroundColor: '#000000',
  };

  const h3Style = {
    fontWeight: 400,
    fontSize: '1.25rem',
    margin: 0,
    marginBottom: '10px',
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
  };

  const pSmallStyle = {
    fontSize: '16px',
    color: '#ffffff',
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1.6,
    marginBottom: '20px',
    fontWeight: 400,
    flex: 1,
  };

  const buttonStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    border: '1px solid #ffffff',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: '"Montserrat", sans-serif',
    marginTop: 'auto',
    width: '100%',
  };

  const borderStyle = {
    borderBottom: '5px solid white',
  };

  return (
    <section style={sectionStyle} id="portfolio">
      <div style={borderStyle}></div>
      <h2 style={h2Style}>Portfolio</h2>
      <div style={portfolioContainerStyle}>
        <div style={containerStyle}>
          {projectList.map((project) => (
            <div style={boxStyle} key={project.title}>
              <div>
                <div>
                  <h3 style={h3Style}>{project.title}</h3>
                </div>
                <p style={pSmallStyle}>{project.description}</p>
              </div>
              <button style={buttonStyle} onClick={() => openModal(project)}>View Details</button>
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
    </section>
  );
};

export default Portfolio;
