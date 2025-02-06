import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const technicalSkills = [
  { title: "Full-Stack Development", description: "Building modern web applications with React, Node.js, and MongoDB." },
  { title: "3D Web Experiences", description: "Creating immersive 3D experiences using Three.js and WebGL." },
  { title: "AI & Chatbots", description: "Integrating AI-powered chatbots using OpenAI's GPT-4 API." },
  { title: "UX/UI Design", description: "Designing intuitive and beautiful interfaces using Material-UI and Figma." },
  { title: "E-Commerce Solutions", description: "Developing secure online stores with Stripe and Firebase." },
  { title: "Performance Optimization", description: "Ensuring websites are fast, SEO-friendly, and highly responsive." },
];

const services = [
  { title: "Website Development", description: "Custom-built websites using React, Next.js, and Tailwind CSS." },
  { title: "3D Portfolio Design", description: "Building interactive portfolios with Three.js and WebGL." },
  { title: "E-Commerce Development", description: "Creating secure and scalable online stores." },
  { title: "AI Integration", description: "Developing AI-powered applications with OpenAI's GPT API." },
  { title: "UX/UI Design", description: "Crafting intuitive designs with Material-UI and Figma." },
  { title: "Performance Optimization", description: "Speeding up websites for better user experience and SEO." },
];

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ py: 5, textAlign: "center" }}>
        {/* Technical Skills Section */}
        <Typography variant="h3" gutterBottom>
          My Technical Skills
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>
          {technicalSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {skill.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Services Offered Section */}
        <Typography variant="h3" gutterBottom sx={{ mt: 6 }}>
          Services I Offer
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Features;
