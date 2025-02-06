import React from "react";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "primary.main" }}>
  <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
    <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
    <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
    <Button color="inherit" onClick={() => navigate("/projects")}>Projects</Button>
    <Button color="inherit" onClick={() => navigate("/features")}>Features</Button>
    <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
  </Toolbar>
</AppBar>

  );
};

export default Navbar;
