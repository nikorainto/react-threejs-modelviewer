import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'
import Scene from './room_scene'
import Background from './room_background'

function Room() {
  return (
    <Canvas camera={{ position: [-10, 10, 100], fov: 45 }}>
      <Scene />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.2}
        autoRotate
        rotateSpeed={-0.5}
      />
      <Suspense fallback={null}>
        <Background />
      </Suspense>
    </Canvas>
  )
}
export default Room
