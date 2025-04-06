import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, image, date, link }) {
  return (
    <div className="project-card">
      <div className="card-date">{date}</div>
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="deploy-link">
            🔗 View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
