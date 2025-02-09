import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.5rem", fontWeight: 600 },
    h6: { fontSize: "1.25rem" },
  },
  palette: {
    primary: { main: "#FF5722" },
    secondary: { main: "#009688" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
    text: { primary: "#333", secondary: "#666" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "10px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
          borderRadius: "12px",
        },
      },
    },
  },
});

export default theme;