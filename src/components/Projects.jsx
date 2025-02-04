import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const projectList = [
  { title: "Project One", description: "Description for project one." },
  { title: "Project Two", description: "Description for project two." },
  { title: "Project Three", description: "Description for project three." },
];

const Projects = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
