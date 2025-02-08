import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: "3rem", fontWeight: 700 },
    h6: { fontSize: "1.25rem" },
  },
  palette: {
    primary: { main: "#FF5722" },
    secondary: { main: "#009688" },
  },
});

export default theme;
