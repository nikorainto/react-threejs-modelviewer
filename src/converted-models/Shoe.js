/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(
    GLTFLoader,
    '/models/shoe/shoe.gltf',
    draco('/draco-gltf/')
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0.01, -0.34, 0.34]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          material={materials.puma_low}
          geometry={nodes.Object_3.geometry}
          position={[0, -0.04, 0.33]}
          rotation={[0, 0, -0.07]}
          scale={[100, 100, 100]}
        />
      </group>
    </group>
  )
}