import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Typography, AppBar, Toolbar, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OrbitControls } from "@react-three/drei";

// 🧊 **Interactive Cube Component**
const InteractiveCube = () => {
  const meshRef = useRef();
  const navigate = useNavigate();

  // Rotate cube on every frame update
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  // Handle face clicks
  const handleFaceClick = (section) => {
    navigate(section);
  };

  return (
    <mesh ref={meshRef} scale={2}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#FF5722" />
      <mesh onClick={() => handleFaceClick("/about")} position={[0, 0, 0.76]} />
      <mesh onClick={() => handleFaceClick("/projects")} position={[0, 0, -0.76]} />
      <mesh onClick={() => handleFaceClick("/contact")} position={[0.76, 0, 0]} />
    </mesh>
  );
};

// 🏠 **Hero Component (Landing Page)**
const Hero = () => {
  return (
    <>
      {/* 🔝 Navigation Bar */}
      <AppBar position="absolute" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/projects">Projects</Button>
          <Button color="inherit" href="/contact">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* 🎨 Hero Section */}
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "white", mb: 4 }}>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
          Click the cube faces to navigate
        </Typography>

        {/* 🎥 3D Cube Canvas */}
        <Canvas style={{ height: 300, width: 300 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <InteractiveCube />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Container>
    </>
  );
};

export default Hero;
