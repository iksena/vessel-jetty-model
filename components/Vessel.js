import { useRef } from 'react';

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

export default Vessel;
