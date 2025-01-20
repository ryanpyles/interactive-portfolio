
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const features = [
  { title: "Feature 1", description: "Description for Feature 1" },
  { title: "Feature 2", description: "Description for Feature 2" },
  { title: "Feature 3", description: "Description for Feature 3" },
];

const Features = () => {
  return (
    <Grid container spacing={4} sx={{ py: 5 }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
