import React from "react";
import ProjectCard from "../components/ProjectCard";
import marioGame from "../assets/images/ParthConnect.png";

const projects = [
  {
    title: "ParthConnect",
    description: "A Video Calling Platform built using MERN Stack.",
    image: marioGame,
    date: "Mar 2025",
    link: "https://parthconnect.onrender.com",
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-background"></div>
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
