import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
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
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" color="primary" size="large">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;