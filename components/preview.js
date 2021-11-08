import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Plane, Box } from '@react-three/drei';

import { dolphins } from '../utils';
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
        key={1}
        mooringPoints={mda1Position}
        mooringFrom={-props.bowToCenter}
        zOffset={-1}
      />,
      <MooringLine
        {...props}
        key={2}
        mooringPoints={mda1Position}
        mooringFrom={-props.bowToCenter}
      />,
      <MooringLine
        {...props}
        key={3}
        mooringPoints={mda1Position}
        mooringFrom={-props.bowToCenter}
        zOffset={1}
      />]}
    {!!props.sternToCenter && [
      <MooringLine
        {...props}
        key={4}
        mooringPoints={mda2Position}
        mooringFrom={props.sternToCenter}
        zOffset={-1}
      />,
      <MooringLine
        {...props}
        key={5}
        mooringPoints={mda2Position}
        mooringFrom={props.sternToCenter}
      />,
      <MooringLine
        {...props}
        key={6}
        mooringPoints={mda2Position}
        mooringFrom={props.sternToCenter}
        zOffset={1}
      />,
    ]}
  </>
);

const Catwalk = (props) => (
  <Box {...props}>
    <meshPhongMaterial color="brown" />
  </Box>
);

const CanvasState = ({ shouldSnapshot, setVesselData }) => {
  useFrame(({ gl, scene, camera }) => {
    if (shouldSnapshot) {
      gl.render(scene, camera);
      const image = gl.domElement.toDataURL();
      setVesselData((data) => ({ ...data, image, shouldSnapshot: false }));
    }
  });

  return null;
};

const Preview = (props) => (
  <Canvas
    camera={{
      fov: 75,
      near: 10,
      far: 2000,
      position: [0, 0, 100],
    }}
  >
    <CanvasState {...props} />
    <OrbitControls enableZoom enablePan />
    <directionalLight color="yellow" position={[0, 50, 30]} />
    <MooringDolphin position={mda1Position} />
    <BreastingDolphin position={[-45, height, 0]} />
    <Vessel {...props} />
    <MooringLines {...props} />
    <Catwalk args={[90, 2, 2]} position={[0, height, 0]} />
    <Platform />
    <Plane args={[500, 500]} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial color="blue" />
    </Plane>
    <BreastingDolphin position={[45, height, 0]} />
    <MooringDolphin position={mda2Position} />
  </Canvas>
);

export default Preview;
