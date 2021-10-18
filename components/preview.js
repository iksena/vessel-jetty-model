import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TransformControls, Plane } from '@react-three/drei';

import { dolphins } from '../utils';
import Model from './Ship';
import Vessel from './Vessel';
import BreastingDolphin from './BreastingDolphin';
import MooringDolphin from './MooringDolphin';
import MooringLine from './MooringLine';
import Platform from './Platform';

const { mda1Position, mda2Position, height } = dolphins;

const MooringLines = (props) => (
  <>
    {!!props.bowToCenter && [
      <MooringLine
        {...props}
        mooringPoints={mda1Position}
        mooringFrom={-props.bowToCenter}
        zOffset={-1}
      />,
      <MooringLine
        {...props}
        mooringPoints={mda1Position}
        mooringFrom={-props.bowToCenter}
      />,
      <MooringLine
        {...props}
        mooringPoints={mda1Position}
        mooringFrom={-props.bowToCenter}
        zOffset={1}
      />]}
    {!!props.sternToCenter && [
      <MooringLine
        {...props}
        mooringPoints={mda2Position}
        mooringFrom={props.sternToCenter}
        zOffset={-1}
      />,
      <MooringLine
        {...props}
        mooringPoints={mda2Position}
        mooringFrom={props.sternToCenter}
      />,
      <MooringLine
        {...props}
        mooringPoints={mda2Position}
        mooringFrom={props.sternToCenter}
        zOffset={1}
      />,
    ]}
  </>
);

const Preview = (props) => (
  <Canvas
    camera={{
      fov: 75,
      near: 10,
      far: 2000,
      position: [0, 0, 100],
    }}
  >
    <OrbitControls enableZoom enablePan />
    <directionalLight color="yellow" position={[0, 50, 30]} />
    <MooringDolphin position={mda1Position} />
    <BreastingDolphin position={[-45, height, 0]} />
    <Vessel {...props} />
    <Suspense fallback={null}>
      <TransformControls mode="translate" showX showY showZ>
        <Model />
      </TransformControls>
    </Suspense>
    <MooringLines />
    <Platform />
    <Plane args={[500, 500]} rotation={[Math.PI / 2, 0, 0]} color="blue" />
    <BreastingDolphin position={[45, height, 0]} />
    <MooringDolphin position={mda2Position} />
  </Canvas>
);

export default Preview;
