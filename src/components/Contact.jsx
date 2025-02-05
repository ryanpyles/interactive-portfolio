import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField label="Email" type="email" variant="outlined" fullWidth required />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            transition: "0.3s",
            "&:hover": { backgroundColor: "secondary.main" },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
