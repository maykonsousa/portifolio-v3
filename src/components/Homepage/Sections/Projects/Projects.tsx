'use client';

import React from 'react';
import { ProjectsSection } from '../../HomePage.styles';
import { ScrollArrow } from '../../ScrollArrow';
import { Typography, Container, Box } from '@mui/material';
import styled from '@emotion/styled';

const ProjectsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(Box)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProjectContent = styled(Box)`
  padding: 1rem;
`;

const ProjectActions = styled(Box)`
  display: flex;
  padding: 0.5rem 1rem 1rem;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: 1px solid #1976d2;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    background-color: #1976d2;
    color: white;
  }
`;

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do projeto 1',
      image: 'https://via.placeholder.com/300x150',
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      image: 'https://via.placeholder.com/300x150',
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição do projeto 3',
      image: 'https://via.placeholder.com/300x150',
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Meus Projetos
        </Typography>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </ProjectContent>
              <ProjectActions>
                <ActionButton>Ver Detalhes</ActionButton>
                <ActionButton>GitHub</ActionButton>
              </ProjectActions>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
      <ScrollArrow targetId="contact" />
    </ProjectsSection>
  );
};
