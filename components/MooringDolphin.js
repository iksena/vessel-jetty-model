import { useRef } from 'react';
import { dolphins } from '../utils';

const MooringDolphin = (props) => {
  const { position: [x, y, z] } = props;
  const ref = useRef();
  const size = 7;
  const foot = dolphins.height + 9 + size;

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
        position={[x, (y - foot) / 2, z]}
        ref={ref}
      >
        <boxGeometry args={[3, foot, 3]} />
        <meshPhongMaterial color="orange" />
      </mesh>
    </group>
  );
};

export default MooringDolphin;
