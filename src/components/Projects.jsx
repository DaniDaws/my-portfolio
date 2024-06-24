import React, { useEffect, useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/DaniDaws/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="projects">
      <h2>My GitHub Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
