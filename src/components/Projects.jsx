import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/ryanpyles/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub projects");
        }
        return response.json();
      })
      .then((data) => {
        setGithubProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>

      {loading && <p className="loading-text">Loading projects...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="github-projects">
        <h3>GitHub Repositories</h3>
        <ul>
          {githubProjects.map((project) => (
            <motion.li key={project.id} whileHover={{ scale: 1.05 }}>
              <h4>{project.name}</h4>
              <p>{project.description || "No description available"}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
