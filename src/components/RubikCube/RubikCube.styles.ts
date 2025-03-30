import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

interface RubikCubeContainerProps {
  height?: string | number;
}

export const RubikCubeContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'height',
})<RubikCubeContainerProps>`
  width: 100%;
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || '300px')};
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin: 0;
  padding: 1rem;
  
  & canvas {
    outline: none;
  }
`; 