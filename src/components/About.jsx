import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body1" paragraph>
          Welcome to our portfolio! I strive to deliver the best services to my
          customers with utmost dedication and professionalism.I am 
          passionate about creating solutions that matter.
        </Typography>
        <Typography variant="body1" paragraph>
          With years of experience in the industry, I have honed my skills to
          provide unparalleled quality and reliability. Let us come together on this journey
          as we continue to innovate and excel.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
