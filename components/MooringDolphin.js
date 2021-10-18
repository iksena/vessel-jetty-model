import { dolphins } from '../utils';

const MooringDolphin = (props) => {
  const { position: [x, y, z] } = props;
  const size = 7;
  const foot = dolphins.height + 9 + size;

  return (
    <group>
      <mesh {...props}>
        <boxGeometry args={[size, size, size]} />
        <meshPhongMaterial color="orange" />
      </mesh>
      <mesh position={[x, (y - foot) / 2, z]}>
        <boxGeometry args={[3, foot, 3]} />
        <meshPhongMaterial color="orange" />
      </mesh>
    </group>
  );
};

export default MooringDolphin;
