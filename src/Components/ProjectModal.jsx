import React from "react";
import Modal from "react-modal";

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000, // Ensure the modal is on top
        },
        content: {
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          padding: "0", // Remove padding to ensure it fits exactly
          margin: "0", // Remove any margin
          width: "100vw", // Full width
          height: "100vh", // Full height
          backgroundColor: "#333",
          color: "white",
          overflowY: "auto", // Allow vertical scrolling if necessary
        },
      }}
    >
      <button
        onClick={onRequestClose}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          backgroundColor: "transparent",
          border: "none",
          color: "white",
          fontSize: "50px",
          cursor: "pointer",
        }}
        aria-label="Close"
      >
        &times;
      </button>
      <div style={{ padding: "2rem" }}>
        <h2>{project.title}</h2>
        <br></br>
        <div>
          <h3>About this project:</h3>
          <p>{project.detailedDescription}</p>
        </div>
        <div>
          <br />
          <h3>Links:</h3>
          <ul>
            {project.links.github && (
              <li>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            )}
            {project.links.youtube && (
              <li>
                <a
                  href={project.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h3>Screenshots:</h3>
          <br />
          <div>
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                style={{
                  width: "100%", // Ensure it fits within the container's width
                  height: "auto", // Maintain aspect ratio
                  marginBottom: "1rem", // Space between images
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
