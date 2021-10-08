import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

const Box = (props) => {
  const ref = useRef();

  return (
    <mesh
      position={[0, 0, 0]}
      ref={ref}
      {...props}
      >
      <boxGeometry args={[7, 7, 7]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export default function Home() {
  return (
    <Canvas>
      <OrbitControls enablePan/>
      <Box position={[-136, 0, -28.5]} />
      <Box position={[-45, 0, 0]} />
      <Box position={[-22.5, 0, 0]} />
      <Box position={[22.5, 0, 0]} />
      <Box position={[45, 0, 0]} />
      <Box position={[119, 0, -35]} />
    </Canvas>
  )
}
