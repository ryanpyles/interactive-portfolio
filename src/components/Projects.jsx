import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Interactive 3D Portfolio",
    description: "A cutting-edge portfolio website featuring 3D navigation with Three.js.",
    image: "/path/to/your-image1.jpg",
  },
  {
    title: "E-Commerce Platform",
    description: "Developed a full-stack e-commerce website with Stripe integration for payments.",
    image: "/path/to/your-image2.jpg",
  },
  {
    title: "AI-Powered Chatbot",
    description: "Built a customer support chatbot using GPT-4 and real-time AI analytics.",
    image: "/path/to/your-image3.jpg",
  },
  {
    title: "Mobile Fitness App",
    description: "Created a mobile fitness tracking app with React Native and Firebase backend.",
    image: "/path/to/your-image4.jpg",
  },
  {
    title: "NFT Marketplace",
    description: "Developed a blockchain-based NFT marketplace for digital artists.",
    image: "/path/to/your-image5.jpg",
  },
  {
    title: "Custom CMS for a Blog",
    description: "Designed and built a headless CMS for bloggers with an intuitive UI.",
    image: "/path/to/your-image6.jpg",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Typography variant="h3" align="center" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projectList.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                {/* Placeholder Image (Replace with actual images later) */}
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Projects;
