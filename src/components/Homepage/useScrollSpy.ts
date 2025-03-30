'use client';

import { useEffect, useState } from 'react';
import { useAppStore, Section } from '@/providers/AppProvider';

// Array de IDs das seções na ordem em que aparecem na página
const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];

// Mapeamento dos IDs das seções para o tipo Section do AppStore
const sectionMapping: Record<string, Section> = {
  hero: 'home',
  about: 'about',
  skills: 'experience',
  projects: 'projects',
  contact: 'contact',
};

export const useScrollSpy = () => {
  const { navigation, isScrolling } = useAppStore();
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const handleScroll = () => {
      // Se estiver rolando programaticamente, não detecta seções
      if (isScrolling) return;
      
      // Usar uma posição mais próxima do topo da janela para melhorar a detecção
      const scrollPosition = window.scrollY + 100; // Ajustado para um offset menor
      
      // Encontrar a seção atual baseada na posição de scroll
      let currentSection: Section | null = null;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        
        if (element) {
          // Obter a posição e dimensões do elemento
          const rect = element.getBoundingClientRect();
          const topPosition = rect.top + window.scrollY;
          
          // Se o scroll estiver dentro da seção
          if (scrollPosition >= topPosition && 
              scrollPosition < topPosition + rect.height) {
            currentSection = sectionMapping[sectionId];
            break;
          }
        }
      }
      
      // Se nenhuma seção for encontrada mas estamos no topo, definir como home
      if (!currentSection && window.scrollY < 300) {
        currentSection = 'home';
      }
      
      // Se encontramos uma seção e ela é diferente da atual, atualizar
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        navigation(currentSection);
      }
    };

    // Adicionar evento de scroll com throttling para melhorar performance
    let isScrollingThrottled = false;
    
    const scrollListener = () => {
      if (!isScrollingThrottled) {
        window.requestAnimationFrame(() => {
          handleScroll();
          isScrollingThrottled = false;
        });
        isScrollingThrottled = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener);
    
    // Executar uma vez para definir a seção inicial
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [navigation, activeSection, isScrolling]);
}; 