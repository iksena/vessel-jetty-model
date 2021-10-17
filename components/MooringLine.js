import { useCallback, useMemo, useRef } from 'react';
import * as THREE from 'three';

const MooringLine = ({
  mooringFrom, mooringPoints, vesselBreadth, zOffset,
}) => {
  const ref = useRef();

  const points = useMemo(() => [
    new THREE.Vector3(mooringFrom, 0, -(vesselBreadth / 2 + 5) + zOffset),
    new THREE.Vector3(...mooringPoints),
  ], [mooringFrom, vesselBreadth, mooringPoints, zOffset]);
  const onUpdate = useCallback((self) => self.setFromPoints(points), [points]);

  return (
    <line position={[0, 3.5, 0]} ref={ref}>
      <bufferGeometry attach="geometry" onUpdate={onUpdate} />
      <lineBasicMaterial attach="material" color="green" linewidth={10} linecap="round" linejoin="round" />
    </line>
  );
};

export default MooringLine;
