import React from "react";
import { Canvas } from "@react-three/fiber";
import { Dodecahedron } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";

const NavigationDodecahedron = () => {
  const handleClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Canvas style={{ height: 200, width: 200 }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Dodecahedron onClick={() => handleClick("about")} scale={1.5}>
        <meshStandardMaterial attach="material" color="#4F46E5" />
      </Dodecahedron>
    </Canvas>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], ["0%", "-100%"]);

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
        justifyContent: "center",
        alignItems: "center",
        translateY: y,
      }}
    >
      <Box sx={{ textAlign: "center", color: "white" }}>
        <Typography variant="h1" sx={{ mb: 4 }}>
          Welcome to My Portfolio
        </Typography>
        <NavigationDodecahedron />
      </Box>
    </motion.div>
  );
};

export default Hero;
