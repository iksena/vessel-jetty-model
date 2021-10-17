import { useRef } from 'react';

import { dolphins } from '../utils';

const BreastingDolphin = (props) => {
  const { position: [x, y, z] } = props;
  const size = 8;
  const foot = dolphins.height + 13 + size;
  const ref = useRef();

  return (
    <group>
      <mesh
        position={[0, 0, 0]}
        ref={ref}
        {...props}
      >
        <boxGeometry args={[size, size, size]} />
        <meshPhongMaterial color="orange" />
      </mesh>
      <mesh
        ref={ref}
        position={[x, y, z - 4]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[1, 3, dolphins.bollardHeight, 50]} />
        <meshPhongMaterial color="orange" />
      </mesh>
      <mesh
        position={[x, (y - foot) / 2, z]}
        ref={ref}
      >
        <boxGeometry args={[4, foot, 4]} />
        <meshPhongMaterial color="orange" />
      </mesh>
    </group>
  );
};

export default BreastingDolphin;
