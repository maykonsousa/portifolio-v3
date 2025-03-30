'use client';

import { create } from 'zustand';
export type Section = 'home' | 'about' | 'experience' | 'projects' | 'contact';
export type Theme = 'light' | 'dark';

// Mapeamento das seções para seus IDs no DOM
const sectionIdMap: Record<Section, string> = {
  home: 'hero',
  about: 'about',
  experience: 'skills',
  projects: 'projects',
  contact: 'contact',
};

interface AppState {
  theme: Theme;
  section: Section;

  toggleTheme: () => void;
  navigation: (section: Section) => void;
  isActiveSection: (section: Section) => boolean;
}

export const useAppStore = create<AppState>((set, get) => ({
  theme: 'light',
  section: 'home',
  // Implementação das ações
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
  navigation: (section: Section) => {
    // Primeiro atualiza o estado
    set(() => ({ section }));

    // Depois realiza a navegação com smooth scroll
    const sectionId = sectionIdMap[section];
    const element = document.getElementById(sectionId);

    if (element) {
      // Usar setTimeout para garantir que o navegador renderize antes de rolar
      setTimeout(() => {
        const headerOffset = 64; // Altura aproximada do header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  },
  isActiveSection: (section: Section) => get().section === section,
}));
