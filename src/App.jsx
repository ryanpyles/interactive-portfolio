import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import RightTabsLayout from "./components/RightTabsLayout";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RightTabsLayout />
  </ThemeProvider>
);

export default App;