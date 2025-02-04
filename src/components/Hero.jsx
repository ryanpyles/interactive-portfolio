import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavigationCube = () => {
  const navigate = useNavigate();

  return (
    <Canvas style={{ height: 150, width: 150 }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.8} />
      <mesh onClick={() => navigate("/about")} scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FF5722" />
      </mesh>
    </Canvas>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#4F46E5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h1" sx={{ color: "white", mb: 4 }}>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
        Explore my work and journey
      </Typography>
      <NavigationCube />
      <Button
        variant="contained"
        sx={{ mt: 4, backgroundColor: "#FF5722" }}
        onClick={() => navigate("/projects")}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default Hero;
