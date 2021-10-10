import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

const Box = (props) => {
  const [x, y, z] = props.position;
  const ref = useRef();

  return (
    <group>
      <mesh
        position={[0, 0, 0]}
        ref={ref}
        {...props}
        >
        <boxGeometry args={[7, 7, 7]} />
        <meshPhongMaterial color={'orange'} />
      </mesh>
      <mesh
        ref={ref}
        position={[x, y, z - 4]}
        rotation={[- Math.PI / 2, 0, 0]}
        >
        <cylinderGeometry args={[1, 3, 2, 50]} />
        <meshPhongMaterial color={'orange'} />
      </mesh>
    </group>
    
  )
}

export default function Preview() {

  return (
    <Canvas>
      <OrbitControls makeDefault enablePan enableZoom/>
      <directionalLight color="yellow" position={[0, 50, 50]} />
      <Box position={[-119, 0, 35]} />
      <Box position={[-45, 0, 0]} />
      <Box position={[-22.5, 0, 0]} />
      <Box position={[22.5, 0, 0]} />
      <Box position={[45, 0, 0]} />
      <Box position={[136, 0, 28.5]} />
    </Canvas>
  )
}
