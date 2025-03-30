'use client';

import React from 'react';
import { HomeContainer } from './HomePage.styles';
import { Hero } from './Sections/Hero';
import { About } from './Sections/About';
import { Projects } from './Sections/Projects';
import { Skills } from './Sections/Skills';
import { Contact } from './Sections/Contact';

export const HomePage = () => {
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
