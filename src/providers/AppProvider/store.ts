'use client';

import { create } from 'zustand';
export type Section = 'home' | 'about' | 'experience' | 'projects' | 'contact';
export type Theme = 'light' | 'dark';

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
  isScrolling: boolean; 

  toggleTheme: () => void;
  navigation: (section: Section) => void;
  isActiveSection: (section: Section) => boolean;
  setIsScrolling: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  theme: 'light',
  section: 'home',
  isScrolling: false,
  
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
    
  setIsScrolling: (value: boolean) => set(() => ({ isScrolling: value })),
  
  navigation: (section: Section) => {
    set(() => ({ section, isScrolling: true }));

    const sectionId = sectionIdMap[section];
    const element = document.getElementById(sectionId);

    if (element) {
      setTimeout(() => {
        const headerOffset = 64; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          set(() => ({ isScrolling: false }));
        }, 1000);
      }, 100);
    }
  },
  
  isActiveSection: (section: Section) => get().section === section,
}));
