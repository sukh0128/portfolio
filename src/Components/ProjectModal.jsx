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
        },
        content: {
          backgroundColor: "#333",
          color: "white",
          width: "50%",
          margin: "auto",
          padding: "2rem",
        },
      }}
    >
      <h2>{project.title}</h2>

      <div>
        <h3>About this project:</h3>
        <p>{project.detailedDescription}</p>
      </div>
      <div>
        <br></br>
        <h3>Links:</h3>
        <ul>
          {project.links.github && (
            <li>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">   GitHub</a></li>
          )}
          {project.links.youtube && (
            <li>
                <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">   YouTube</a></li>
)}
                </ul>
            </div>
            <div>
                <h3>Screenshots:</h3>
                <br></br>
                <div>
                    {project.screenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    ))}
                </div>
            </div>
            <br></br>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default ProjectModal;
