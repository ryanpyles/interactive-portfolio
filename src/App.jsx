import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Hero from "./components/Hero";

const theme = createTheme({
  palette: {
    primary: { main: "#4F46E5" },
    secondary: { main: "#6366F1" },
    background: { default: "#F9FAFB" },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Hero />
    <Box id="about" sx={{ height: "100vh", padding: 4 }}>
      <h2>About Section</h2>
      <p>Welcome to the about section of the portfolio.</p>
    </Box>
    <Box id="projects" sx={{ height: "100vh", padding: 4 }}>
      <h2>Projects Section</h2>
      <p>Here you can explore my projects and work.</p>
    </Box>
    <Box id="contact" sx={{ height: "100vh", padding: 4 }}>
      <h2>Contact Section</h2>
      <p>Feel free to reach out to me.</p>
    </Box>
  </ThemeProvider>
);

export default App;
gi