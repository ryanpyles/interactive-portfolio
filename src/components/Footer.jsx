import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, backgroundColor: "primary.main", color: "white" }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Ryan Pyles. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="/privacy" color="inherit" underline="hover">
            Privacy Policy
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
