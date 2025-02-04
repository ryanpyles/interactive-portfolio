import React from "react";
import { Box, Typography, Avatar, Container } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5, textAlign: "center" }}>
      <Avatar
        alt="Ryan Pyles"
        src="/src/assets/avatar.png"
        sx={{ width: 120, height: 120, mx: "auto", mb: 3 }}
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
  );
};

export default About;
