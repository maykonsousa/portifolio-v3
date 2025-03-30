'use client';

import { Box, styled } from "@mui/material";


export const HomeContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled(Box)(({ theme }) => `
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 80px;
  scroll-margin-top: 64px;
  color: ${theme.palette.text.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
`);

export const HeroSection = styled(Section)(({ theme }) => `
  background-color: ${theme.palette.background.default};
`);

export const AboutSection = styled(Section)(({ theme }) => `
  background-color: ${theme.palette.background.paper};
`);

export const ProjectsSection = styled(Section)(({ theme }) => `
  background-color: ${theme.palette.background.default};
`);

export const SkillsSection = styled(Section)(({ theme }) => `
  background-color: ${theme.palette.background.paper};
`);

export const ContactSection = styled(Section)(({ theme }) => `
  background-color: ${theme.palette.background.default};
`);
