'use client';

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { Adb, Menu as MenuIcon } from '@mui/icons-material';
import React from 'react';
import { useAppStore, Section } from '@/providers/AppProvider';
import { ToggleThemeSwitch } from '@/components/ToggleThemeSwich';

// Mapeamento das seções com seus títulos amigáveis
const pagesMap: Record<Section, string> = {
  home: 'Home',
  about: 'Sobre mim',
  experience: 'Experiência',
  projects: 'Projetos',
  contact: 'Contato',
};

const pages = Object.entries(pagesMap) as [Section, string][];

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const { navigation, isActiveSection } = useAppStore();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (section?: Section) => {
    setAnchorElNav(null);

    if (section) {
      navigation(section);
    }
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            onClick={() => navigation('home')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MAYKON SOUSA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(([key, label]) => (
                <MenuItem
                  key={key}
                  onClick={() => handleCloseNavMenu(key)}
                  selected={isActiveSection(key)}
                >
                  <Typography sx={{ textAlign: 'center' }}>{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home"
            onClick={() => navigation('home')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MAYKON SOUSA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(([key, label]) => (
              <Button
                key={key}
                onClick={() => handleCloseNavMenu(key)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: isActiveSection(key) ? 'bold' : 'normal',
                  borderBottom: isActiveSection(key)
                    ? '2px solid white'
                    : 'none',
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ToggleThemeSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
