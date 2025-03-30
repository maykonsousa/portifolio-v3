'use client';

import React from 'react';
import { Switch } from './ToggleThemeSwitch.styles';
import { useAppStore } from '../../providers/AppProvider';
import { Box, Tooltip } from '@mui/material';

export const ToggleThemeSwitch = () => {
  const { theme, toggleTheme } = useAppStore();
  const isDarkMode = theme === 'dark';

  return (
    <Tooltip
      title={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          slotProps={{
            input: {
              'aria-label': 'Alternar tema',
            },
          }}
        />
      </Box>
    </Tooltip>
  );
};
