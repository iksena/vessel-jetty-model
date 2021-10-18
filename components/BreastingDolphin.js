import { dolphins } from '../utils';

const BreastingDolphin = (props) => {
  const { position: [x, y, z] } = props;
  const size = 8;
  const foot = dolphins.height + 13 + size;

  return (
    <group>
      <mesh {...props}>
        <boxGeometry args={[size, size, size]} />
        <meshPhongMaterial color="orange" />
      </mesh>
      <mesh
        position={[x, y, z - size / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[1, size / 2, dolphins.bollardHeight]} />
        <meshPhongMaterial color="orange" />
      </mesh>
      <mesh position={[x, (y - foot) / 2, z]}>
        <boxGeometry args={[4, foot, 4]} />
        <meshPhongMaterial color="orange" />
      </mesh>
    </group>
  );
};

export default BreastingDolphin;
