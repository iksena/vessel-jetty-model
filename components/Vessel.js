import { TransformControls } from '@react-three/drei';
import {
  Suspense, useEffect, useRef, useState,
} from 'react';

import Ship from './Ship';

const Vessel = ({
  bowToCenter,
  sternToCenter,
  vesselBreadth,
  vesselLength,
  draught,
  offset = 0,
}) => {
  const mesh = useRef();
  const depth = 20;

  return (
    <>
      <Suspense fallback={null}>
        <TransformControls mode="translate" showX showY showZ>
          <Ship
            position={[
              (sternToCenter - bowToCenter) / 2 + offset,
              (depth / 2) - draught,
              -1 * (5 + (vesselBreadth / 2)),
            ]}
            size={[vesselLength, depth, vesselBreadth]}
          />
        </TransformControls>
      </Suspense>
      <group>
        <mesh
          position={[
            (sternToCenter - bowToCenter) / 2 + offset,
            (depth / 2) - draught,
            -1 * (5 + (vesselBreadth / 2)),
          ]}
          ref={mesh}
        >
          <boxGeometry args={[vesselLength, depth, vesselBreadth]} />
          <meshBasicMaterial color="#0c3d70" />
        </mesh>
      </group>
    </>
  );
};

export default Vessel;
