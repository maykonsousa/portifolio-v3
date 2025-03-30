import { Box, styled } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => `
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 2rem;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  height: 100%;
  ${theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    text-align: center;
  }
`);

export const HeroContent = styled(Box)(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  
  ${theme.breakpoints.down('md')} {
    align-items: center;
    padding: 1rem;
  }

  


  

@keyframes ripple {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -50%) scale(80);
    opacity: 0;
  }
}

`);

export const HeroGame = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
