import { useRef } from 'react';

import { dolphins } from '../utils';

const Foot = ({ position: [x, , z], platformDepth }) => (
  <mesh position={[x, -platformDepth / 2 - dolphins.height, z]}>
    <boxGeometry args={[2, 13 + dolphins.height + platformDepth, 2]} />
    <meshPhongMaterial color="orange" />
  </mesh>
);

const Platform = (props) => {
  const depth = 8;
  const length = 21.5;
  const width = 19;
  const ref = useRef();

  return (
    <group>
      <mesh
        position={[0, dolphins.height, width / 3]}
        ref={ref}
        {...props}
      >
        <boxGeometry args={[length, depth, width]} />
        <meshPhongMaterial color="orange" />
      </mesh>
      <Foot position={[length / 4, 0, (width / 3) / 4]} platformDepth={depth} />
      <Foot position={[-length / 4, 0, (width / 3) / 4]} platformDepth={depth} />
      <Foot position={[length / 4, 0, (width / 2)]} platformDepth={depth} />
      <Foot position={[-length / 4, 0, (width / 2)]} platformDepth={depth} />
    </group>
  );
};

export default Platform;
