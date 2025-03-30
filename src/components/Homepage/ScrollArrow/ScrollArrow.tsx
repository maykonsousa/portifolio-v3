'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

interface ScrollArrowProps {
  targetId: string;
}

const ArrowContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

export const ScrollArrow = ({ targetId }: ScrollArrowProps) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ArrowContainer>
      <IconButton onClick={handleClick} size="large" color="primary">
        <KeyboardArrowDown fontSize="large" />
      </IconButton>
    </ArrowContainer>
  );
};
