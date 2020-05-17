import * as THREE from 'three'
import React from 'react'
import { useLoader } from 'react-three-fiber'

function Background() {
  const texture = useLoader(
    THREE.TextureLoader,
    'background-images/sphere/room.jpg'
  )
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

export default Background
