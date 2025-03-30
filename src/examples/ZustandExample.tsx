import React from 'react';
import { useAppStore } from '../providers/AppProvider';

export const ZustandExample = () => {
  // Utilizando o hook do Zustand diretamente
  const { toggleTheme } = useAppStore((state) => ({
    toggleTheme: state.toggleTheme,
  }));

  return (
    <div
      style={{
        padding: '20px',
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
      }}
    >
      <h2>Exemplo de Zustand</h2>
      <p>Contagem atual: {count}</p>
      <p>Tema atual: {theme}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={toggleTheme}>Alternar Tema</button>
      </div>
    </div>
  );
};
