/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: niallplatt (https://sketchfab.com/niallplatt)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/oil-tanker-b4aa7dcf31ca476dbc1ebcab94ca8cdc
title: Oil Tanker
*/

import React, { useCallback, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/ship.gltf');

  const onUpdate = useCallback((self) => {
    console.log(JSON.stringify(self, null, 4));
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} position={[-80, 0, -160]}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={materials.initialShadingGroup}
          onUpdate={onUpdate}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/ship.gltf');
