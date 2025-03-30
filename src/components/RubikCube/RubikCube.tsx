'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RubikCubeContainer } from './RubikCube.styles';
import * as THREE from 'three';
import { useTheme } from '@mui/material/styles';
import { red, blue, green, yellow, orange } from '@mui/material/colors';

const useCubeColors = () => {
  const theme = useTheme();

  return {
    orange: orange[500],
    red: red[500],
    blue: blue[500],
    green: green[500],
    white: theme.palette.common.white,
    yellow: yellow[500],
    background: theme.palette.mode === 'dark' ? '#121212' : '#282828',
  };
};

interface CubieProps {
  position: [number, number, number];
  colors: {
    orange: string;
    red: string;
    blue: string;
    green: string;
    white: string;
    yellow: string;
    background: string;
  };
  animationSpeed?: number;
}

const Cubie: React.FC<CubieProps> = ({
  position,
  colors,
  animationSpeed = 0.2,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotação suave automática
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * animationSpeed) * 0.1;
      meshRef.current.rotation.x =
        Math.cos(state.clock.elapsedTime * animationSpeed) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      <meshStandardMaterial attach="material-0" color={colors.orange} />
      <meshStandardMaterial attach="material-1" color={colors.red} />
      <meshStandardMaterial attach="material-2" color={colors.blue} />
      <meshStandardMaterial attach="material-3" color={colors.green} />
      <meshStandardMaterial attach="material-4" color={colors.white} />
      <meshStandardMaterial attach="material-5" color={colors.yellow} />
    </mesh>
  );
};

interface RubikCube3DProps {
  rotationSpeed?: number;
}

const RubikCube3D: React.FC<RubikCube3DProps> = ({ rotationSpeed = 0.005 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const colors = useCubeColors();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const createCubies = () => {
    const cubies = [];
    const positions = [-1, 0, 1];

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          const cubieColors = {
            orange: x === 2 ? colors.orange : colors.background,
            red: x === 0 ? colors.red : colors.background,
            blue: y === 2 ? colors.blue : colors.background,
            green: y === 0 ? colors.green : colors.background,
            white: z === 2 ? colors.white : colors.background,
            yellow: z === 0 ? colors.yellow : colors.background,
            background: colors.background,
          };

          cubies.push(
            <Cubie
              key={`${x}-${y}-${z}`}
              position={[positions[x], positions[y], positions[z]]}
              colors={cubieColors}
              animationSpeed={0.2}
            />,
          );
        }
      }
    }
    return cubies;
  };

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      {createCubies()}
    </group>
  );
};

interface RubikCubeProps {
  height?: string | number;
  rotationSpeed?: number;
}

export const RubikCube: React.FC<RubikCubeProps> = ({
  height = 300,
  rotationSpeed = 0.005,
}) => {
  return (
    <RubikCubeContainer height={height}>
      <Canvas
        shadows
        camera={{ position: [4, 4, 4], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <RubikCube3D rotationSpeed={rotationSpeed} />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </RubikCubeContainer>
  );
};
