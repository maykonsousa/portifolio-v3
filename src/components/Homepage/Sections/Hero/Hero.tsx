'use client';

import React from 'react';
import { HeroSection } from '../../HomePage.styles';
import { ScrollArrow } from '../../ScrollArrow';
import { Typography, Button, Box, Container } from '@mui/material';

export const Hero = () => {
  return (
    <HeroSection id="hero">
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Meu Portfólio
          </Typography>
          <Typography variant="h5" gutterBottom>
            Desenvolvedor Full Stack
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
          >
            Entre em contato
          </Button>
        </Box>
      </Container>
      <ScrollArrow targetId="about" />
    </HeroSection>
  );
};
