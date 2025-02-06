import React from "react";
import { Container, Typography, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}   
      exit={{ opacity: 0, y: -20 }}    
      transition={{ duration: 0.8 }}
    >
      <Container maxWidth="md" sx={{ py: 5, textAlign: "center" }}>
      <Avatar
  alt="Ryan Pyles"
  src="./src/assets/avatar.png"
  sx={{
    width: { xs: 100, sm: 150 }, // Responsive width
    height: { xs: 100, sm: 150 }, // Responsive height
    mx: "auto",
    mb: 3,
  }}
/>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto" }}>
          I'm a passionate full-stack developer, UX/UI designer, and creative technologist.
          With experience in React, Three.js, and Material-UI, I build immersive digital
          experiences. Let's connect and create something amazing!
        </Typography>
      </Container>
    </motion.div>
  );
};

export default About;
