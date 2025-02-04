import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          Thank you for visiting my portfolio. Connect with me below!
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link
            href="https://github.com/ryanpyles"
            target="_blank"
            rel="noopener"
            sx={{ mx: 1, color: "white", textDecoration: "none" }}
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/ryanpyles"
            target="_blank"
            rel="noopener"
            sx={{ mx: 1, color: "white", textDecoration: "none" }}
          >
            LinkedIn
          </Link>
          <Link href="mailto:me@ryanpyles.com" sx={{ mx: 1, color: "white", textDecoration: "none" }}>
            Email Me
          </Link>
        </Box>
        <Typography variant="body2" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} Ryan Pyles. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
