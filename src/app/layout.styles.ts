'use client';

import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const MainContent = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  flexGrow: 1,
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 3),
  },
}));
