import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")
      .then((response) => response.json())
      .then((data) => setGithubProjects(data))
      .catch((error) => console.error("Error fetching GitHub repos:", error));
  }, []);

  const vercelProjects = [
    { name: "Task Manager", url: "https://task-manager-fawn-five.vercel.app/", repo: "https://github.com/ryanpyles/task-manager" },
    { name: "Multilingual Slang Phrasebook", url: "https://multilingual-slang-phrasebook.vercel.app/", repo: "https://github.com/ryanpyles/multilinguual-slang-phrasebook" },
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>

      {/* Vercel Projects */}
      <div className="vercel-projects">
        <h3>Live Deployments</h3>
        <div className="project-grid">
          {vercelProjects.map((project, index) => (
            <motion.div key={index} className="project-card">
              <h4>{project.name}</h4>
              <iframe src={project.url} width="100%" height="300px" frameBorder="0"></iframe>
              <div className="buttons">
                <a href={project.url}>View Live</a>
                <a href={project.repo}>View Code</a>
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
            <motion.li key={project.id}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <a href={project.html_url}>View on GitHub</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
