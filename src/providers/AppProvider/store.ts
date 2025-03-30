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
  isScrolling: boolean; // Flag para indicar se está rolando programaticamente

  toggleTheme: () => void;
  navigation: (section: Section) => void;
  isActiveSection: (section: Section) => boolean;
  setIsScrolling: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  theme: 'light',
  section: 'home',
  isScrolling: false,
  
  // Implementação das ações
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
    
  setIsScrolling: (value: boolean) => set(() => ({ isScrolling: value })),
  
  navigation: (section: Section) => {
    // Primeiro atualiza o estado
    set(() => ({ section, isScrolling: true }));

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
        
        // Definir um timeout para desabilitar a flag de rolagem programática
        // após a animação terminar (1 segundo é uma estimativa razoável)
        setTimeout(() => {
          set(() => ({ isScrolling: false }));
        }, 1000);
      }, 100);
    }
  },
  
  isActiveSection: (section: Section) => get().section === section,
}));
