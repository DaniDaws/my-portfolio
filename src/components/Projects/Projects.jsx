import React, { useEffect, useState } from "react";
import { fetchRepos } from "../../services/api";
import styles from "./Projects.module.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const repos = await fetchRepos("DaniDaws");
      setProjects(repos);
    };
    getProjects().catch(setError);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className={styles.projects}>
      <h2>My GitHub Projects</h2>
      <ul>
        <li>
          <a
            href="https://github.com/house-of-the-badger/ekanS"
            target="_blank"
            rel="noopener noreferrer"
          >
            ekanS
          </a>
        </li>
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
