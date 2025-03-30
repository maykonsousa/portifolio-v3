'use client';

import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
}));

export const MainContent = styled(Box)(() => ({
  width: '100%',
  flexGrow: 1,
}));
