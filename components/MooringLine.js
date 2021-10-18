import { useCallback, useMemo, useRef } from 'react';
import * as THREE from 'three';

import { dolphins } from '../utils';

const MooringLine = ({
  mooringFrom, mooringPoints, vesselBreadth, zOffset = 0, draught,
}) => {
  const ref = useRef();
  const points = useMemo(() => [
    new THREE.Vector3(
      mooringFrom,
      10 - draught + dolphins.height,
      -(vesselBreadth / 2 + 5) + zOffset,
    ),
    new THREE.Vector3(...mooringPoints),
  ], [mooringFrom, vesselBreadth, mooringPoints, zOffset, draught]);
  const onUpdate = useCallback((self) => self.setFromPoints(points), [points]);

  return (
    <line position={[0, 3.5, 0]} ref={ref}>
      <bufferGeometry attach="geometry" onUpdate={onUpdate} />
      <lineBasicMaterial attach="material" color="green" linewidth={10} linecap="round" linejoin="round" />
    </line>
  );
};

export default MooringLine;
