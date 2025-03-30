'use client';

import React from 'react';
import { HomeContainer } from './HomePage.styles';
import { Hero } from './Sections/Hero';
import { About } from './Sections/About';
import { Skills } from './Sections/Skills';
import { Projects } from './Sections/Projects';
import { Contact } from './Sections/Contact';
import { useScrollSpy } from './useScrollSpy';

export const HomePage = () => {
  // Ativa o ScrollSpy para detectar a seção visível durante o scroll
  useScrollSpy();

  return (
    <HomeContainer>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </HomeContainer>
  );
};
