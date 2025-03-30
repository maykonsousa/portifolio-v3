'use client';

import React from 'react';
import { SkillsSection } from '../../HomePage.styles';
import { ScrollArrow } from '../../ScrollArrow';
import { Typography, Container, Box, useTheme, Theme } from '@mui/material';
import styled from '@emotion/styled';

const SkillsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

interface ThemedProps {
  theme: Theme;
}

const SkillCard = styled(Box)<ThemedProps>`
  background-color: ${(props) => props.theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Skills = () => {
  const theme = useTheme();
  const skills = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Node.js' },
    { id: 3, name: 'TypeScript' },
    { id: 4, name: 'Next.js' },
    { id: 5, name: 'Material UI' },
    { id: 6, name: 'JavaScript' },
    { id: 7, name: 'HTML/CSS' },
    { id: 8, name: 'Git' },
  ];

  return (
    <SkillsSection id="skills">
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Minhas Habilidades
        </Typography>

        <SkillsGrid>
          {skills.map((skill) => (
            <SkillCard key={skill.id} theme={theme}>
              <Typography variant="h6">{skill.name}</Typography>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
      <ScrollArrow targetId="projects" />
    </SkillsSection>
  );
};
