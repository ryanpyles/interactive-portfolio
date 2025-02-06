import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

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
        autoComplete="on" // Enable browser autofill
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
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
