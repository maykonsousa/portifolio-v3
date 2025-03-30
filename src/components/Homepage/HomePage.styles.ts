'use client';

import { Box, styled } from "@mui/material";


export const HomeContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 80px;
  scroll-margin-top: 64px;
`;

export const HeroSection = styled(Section)`
  /* Cores serão controladas pelo tema do sistema */
`;

export const AboutSection = styled(Section)`
  background-color: #f5f5f5;
`;

export const ProjectsSection = styled(Section)`
  /* Cores serão controladas pelo tema do sistema */
`;

export const SkillsSection = styled(Section)`
  background-color: #f5f5f5;
`;

export const ContactSection = styled(Section)`
  /* Cores serão controladas pelo tema do sistema */
`;
