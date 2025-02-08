import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import { RightTabsLayout } from "./components/RightTabsLayout"; // Main layout

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RightTabsLayout />
  </ThemeProvider>
);

export default App;
