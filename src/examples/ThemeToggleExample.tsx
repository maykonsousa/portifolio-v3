'use client';

import React from 'react';
import { useAppStore } from '../providers/AppProvider';
import { Button, Typography, Box, Container, Paper } from '@mui/material';

export const ThemeToggleExample = () => {
  // Obtendo o tema atual e a função para alternar entre temas
  const { theme, toggleTheme } = useAppStore();

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Exemplo de Alternância de Tema
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body1">
            Tema atual:{' '}
            <strong>{theme === 'light' ? 'Claro' : 'Escuro'}</strong>
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'primary.main',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
              }}
            >
              <Typography color="primary.contrastText">Primária</Typography>
            </Box>

            <Box
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'secondary.main',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
              }}
            >
              <Typography color="secondary.contrastText">Secundária</Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={toggleTheme}
            sx={{ mt: 2 }}
          >
            Alternar para tema {theme === 'light' ? 'escuro' : 'claro'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
