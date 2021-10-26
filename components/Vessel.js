import { useRef } from 'react';

const Vessel = ({
  bowToCenter,
  sternToCenter,
  vesselBreadth,
  vesselLength,
  draught,
  offset = 0,
}) => {
  const depth = 20;
  const ref = useRef();

  return (
    <group>
      <mesh
        position={[
          (sternToCenter - bowToCenter) / 2 + offset,
          (depth / 2) - draught,
          -1 * (5 + (vesselBreadth / 2)),
        ]}
        ref={ref}
      >
        <boxGeometry args={[vesselLength, depth, vesselBreadth]} />
        <meshBasicMaterial color="#0c3d70" />
      </mesh>
    </group>
  );
};

export default Vessel;
