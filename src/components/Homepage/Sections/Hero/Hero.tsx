'use client';

import React from 'react';
import { HeroSection } from '../../HomePage.styles';
import { ScrollArrow } from '../../ScrollArrow';
import { Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { RubikCube } from '@components';
import { HeroContainer, HeroContent, HeroGame } from './Hero.styles';
import { useAppStore } from '@/providers/AppProvider';

export const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigation = useAppStore((state) => state.navigation);

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent>
          <Typography variant="h2" component="h1" gutterBottom>
            Maykon Sousa
          </Typography>
          <Typography variant="h5" gutterBottom>
            Desenvolvedor Full Stack
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
            onClick={() => navigation('contact')}
          >
            Entre em contato
          </Button>
        </HeroContent>
        <HeroGame>
          <RubikCube height={isMobile ? 200 : 500} rotationSpeed={0.003} />
        </HeroGame>
      </HeroContainer>
      <ScrollArrow targetId="about" />
    </HeroSection>
  );
};
