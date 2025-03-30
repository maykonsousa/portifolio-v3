'use client';

import React from 'react';
import { AboutSection } from '../../HomePage.styles';
import { ScrollArrow } from '../../ScrollArrow';
import { Typography, Container, Paper } from '@mui/material';

export const About = () => {
  return (
    <AboutSection id="about">
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Sobre mim
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
          <Typography variant="body1" paragraph>
            Desenvolvedor apaixonado por criar soluções tecnológicas inovadoras.
          </Typography>
          <Typography variant="body1" paragraph>
            Experiência em desenvolvimento web, mobile e backend.
          </Typography>
        </Paper>
      </Container>
      <ScrollArrow targetId="skills" />
    </AboutSection>
  );
};
