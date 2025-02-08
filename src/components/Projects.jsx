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

  const vercelProjects = [
    {
      name: "Task Manager",
      url: "https://task-manager-fawn-five.vercel.app/",
      repo: "https://github.com/ryanpyles/task-manager",
      image: "/assets/task_manager.jpg",
    },
    {
      name: "Multilingual Slang Phrasebook",
      url: "https://multilingual-slang-phrasebook.vercel.app/",
      repo: "https://github.com/ryanpyles/multilingual-slang-phrasebook",
      image: "/assets/multilingual_slang_phrasebook.jpg",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>

      {/* Loading & Error Handling */}
      {loading && <p className="loading-text">Loading projects...</p>}
      {error && <p className="error-text">{error}</p>}

      {/* Vercel Projects */}
      <div className="vercel-projects">
        <h3>Live Deployments</h3>
        <div className="project-grid">
          {vercelProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
            >
              <h4>{project.name}</h4>
              <img
                src={project.image}
                alt={project.name}
                width="100%"
                height="200px"
                style={{ objectFit: "cover" }}
              />
              <div className="buttons">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View Live
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GitHub Projects */}
      <div className="github-projects">
        <h3>GitHub Repositories</h3>
        <ul>
          {githubProjects.map((project) => (
            <motion.li key={project.id} whileHover={{ scale: 1.05 }}>
              <h4>{project.name}</h4>
              <p>{project.description || "No description available"}</p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
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