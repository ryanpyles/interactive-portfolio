import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';

const features = [
  { title: 'Feature One', description: 'Description of feature one.' },
  { title: 'Feature Two', description: 'Description of feature two.' },
  { title: 'Feature Three', description: 'Description of feature three.' },
];

const Features = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        Our Features
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;