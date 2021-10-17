import React, {
  useCallback, useMemo, useRef, Suspense,
} from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Ship';

const dolphins = {
  fenderHeight: 2.55,
  mda1Position: [-119, 0, 35],
  mda2Position: [136, 0, 28.5],
};

const BreastingDolphin = (props) => {
  const { position: [x, y, z] } = props;
  const ref = useRef();

  return (
    <group>
      <mesh
        position={[0, 0, 0]}
        ref={ref}
        {...props}
      >
        <boxGeometry args={[7, 7, 7]} />
        <meshPhongMaterial color="orange" />
      </mesh>
      <mesh
        ref={ref}
        position={[x, y, z - 4]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[1, 3, dolphins.fenderHeight, 50]} />
        <meshPhongMaterial color="orange" />
      </mesh>
    </group>
  );
};

const MooringDolphin = (props) => {
  const ref = useRef();

  return (
    <mesh
      position={[0, 0, 0]}
      ref={ref}
      {...props}
    >
      <boxGeometry args={[7, 7, 7]} />
      <meshPhongMaterial color="orange" />
    </mesh>
  );
};

const Vessel = ({
  bowToCenter,
  sternToCenter,
  vesselBreadth,
  vesselLength,
}) => {
  const ref = useRef();

  return (
    <mesh
      position={[(sternToCenter - bowToCenter) / 2, 0, -1 * (5 + (vesselBreadth / 2))]}
      ref={ref}
    >
      <boxGeometry args={[vesselLength, 7, vesselBreadth]} />
      <meshPhongMaterial color="blue" />
    </mesh>
  );
};

const MooringLine = ({ mooringFrom, mooringPoints, vesselBreadth }) => {
  const ref = useRef();

  const points = useMemo(() => [
    new THREE.Vector3(mooringFrom, 0, -(vesselBreadth / 2 + 5)),
    new THREE.Vector3(...mooringPoints),
  ], [mooringFrom, vesselBreadth, mooringPoints]);
  const onUpdate = useCallback((self) => self.setFromPoints(points), [points]);

  return (
    <line position={[0, 3.5, 0]} ref={ref}>
      <bufferGeometry attach="geometry" onUpdate={onUpdate} />
      <lineBasicMaterial attach="material" color="green" linewidth={10} linecap="round" linejoin="round" />
    </line>
  );
};

const Preview = (props) => (
  <Canvas camera={{
    fov: 75, near: 10, far: 2000, position: [0, 0, 100],
  }}
  >
    <OrbitControls enableZoom enablePan />
    <directionalLight color="yellow" position={[0, 50, 30]} />
    <MooringDolphin position={dolphins.mda1Position} />
    {props.bowToCenter && (
      <MooringLine
        {...props}
        mooringPoints={dolphins.mda1Position}
        mooringFrom={-props.bowToCenter}
      />
    )}
    <BreastingDolphin position={[-45, 0, 0]} />
    <Vessel {...props} />
    <Suspense fallback={null}>
      <Model />
    </Suspense>
    <BreastingDolphin position={[45, 0, 0]} />
    <MooringDolphin position={dolphins.mda2Position} />
    {!!props.sternToCenter && (
      <MooringLine
        {...props}
        mooringPoints={dolphins.mda2Position}
        mooringFrom={props.sternToCenter}
      />
    )}
  </Canvas>
);

export default Preview;
