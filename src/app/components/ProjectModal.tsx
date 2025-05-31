import React, { useEffect } from "react";
import Modal from "react-modal";

interface ProjectLinks {
  github?: string;
  youtube?: string;
}

interface Project {
  title: string;
  detailedDescription: string;
  screenshots: string[];
  links: ProjectLinks;
}

interface ProjectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  project: Project;
}

const ProjectModal = ({ isOpen, onRequestClose, project }: ProjectModalProps) => {
  useEffect(() => {
    // Set the app element for react-modal to ensure proper accessibility
    if (typeof document !== 'undefined') {
      Modal.setAppElement('body');
    }
  }, []);

  const modalContentStyle = {
    position: "fixed" as const,
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0",
    margin: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    color: "#ffffff",
    overflowY: "auto" as const,
    fontFamily: '"Montserrat", sans-serif',
    WebkitFontSmoothing: 'antialiased' as const,
    MozOsxFontSmoothing: 'grayscale' as const,
  };

  const containerStyle = {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: '"Montserrat", sans-serif',
  };

  const closeButtonStyle = {
    position: "fixed" as const,
    top: "0",
    right: "0",
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "1px solid #ffffff",
    padding: "1rem 1.25rem",
    borderRadius: "0 0 0 8px",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "bold" as const,
    zIndex: 1001,
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: 400,
    margin: 0,
    paddingBottom: "2rem",
    color: "#ffffff",
    fontFamily: '"Montserrat", sans-serif',
    textAlign: "center" as const,
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: 400,
    color: "#ffffff",
    fontFamily: '"Montserrat", sans-serif',
    marginBottom: "1rem",
  };

  const textStyle = {
    fontSize: "20px",
    lineHeight: 1.7,
    marginBottom: "2rem",
    fontWeight: 400,
    color: "#ffffff",
    fontFamily: '"Montserrat", sans-serif',
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "underline",
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "18px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    marginBottom: "2rem",
    borderRadius: "10px",
    border: "1px solid rgb(204, 204, 204)",
  };

  const linksListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const linkItemStyle = {
    marginBottom: "0.5rem",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Modal"
      appElement={typeof document !== 'undefined' ? document.body : undefined}
      ariaHideApp={typeof document !== 'undefined'}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1000,
        },
        content: modalContentStyle,
      }}
    >
      <button
        onClick={onRequestClose}
        style={closeButtonStyle}
        aria-label="Close"
      >
        ✕
      </button>
      
      <div style={containerStyle}>
        <h1 style={titleStyle}>{project.title}</h1>
        
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={sectionTitleStyle}>About this project:</h2>
          <p style={textStyle}>{project.detailedDescription}</p>
        </div>

        {(project.links.github || project.links.youtube) && (
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={sectionTitleStyle}>Links:</h2>
            <ul style={linksListStyle}>
              {project.links.github && (
                <li style={linkItemStyle}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    → GitHub Repository
                  </a>
                </li>
              )}
              {project.links.youtube && (
                <li style={linkItemStyle}>
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    → YouTube Demo
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}

        <div>
          <h2 style={sectionTitleStyle}>Screenshots:</h2>
          <div>
            {project.screenshots.map((screenshot: string, index: number) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                style={imageStyle}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
