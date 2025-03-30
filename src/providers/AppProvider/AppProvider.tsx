'use client';

import React, { createContext } from 'react';
import { useAppStore } from './store';

// Criando um contexto para prover as funções do Zustand (opcional)
const AppContext = createContext<ReturnType<typeof useAppStore> | null>(null);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  // Como o Zustand já gerencia o estado globalmente,
  // esse provider serve mais como um ponto de extensão e para manter compatibilidade
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

// Hook auxiliar que retorna a store do Zustand
export const useAppContext = () => {
  // Usando diretamente o Zustand para gerenciar o estado
  return useAppStore();
};

// Exportando o hook principal da store para uso direto
export { useAppStore } from './store';
