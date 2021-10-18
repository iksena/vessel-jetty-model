import { useRef } from 'react';

const Vessel = ({
  bowToCenter,
  sternToCenter,
  vesselBreadth,
  vesselLength,
  draught,
}) => {
  const depth = 20;
  const ref = useRef();

  return (
    <mesh
      position={[
        (sternToCenter - bowToCenter) / 2,
        (depth / 2) - draught,
        -1 * (5 + (vesselBreadth / 2)),
      ]}
      ref={ref}
    >
      <boxGeometry args={[vesselLength, depth, vesselBreadth]} />
      <meshBasicMaterial color="#0c3d70" />
    </mesh>
  );
};

export default Vessel;
