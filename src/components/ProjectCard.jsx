import React from "react";
import '../assets/projectCard.css';

export default function ProjectCard({ project, onSelect }) {
  const handleClick = () => {
    onSelect(project);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      {project.image && (
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image"
        />
      )}

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
      </div>
    </div>
  );
}
