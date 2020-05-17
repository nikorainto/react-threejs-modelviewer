import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Sky, OrbitControls } from 'drei'
import Scene from './shoe_scene'
import ShoeModel from '../../converted-models/Shoe'

function Shoe() {
  return (
    <Canvas
      camera={{ position: [-10, 10, 100], fov: 45 }}
      shadowMap
      invalidateFrameloop
    >
      <Scene />
      <OrbitControls minDistance={5} maxDistance={150} />
      <Suspense fallback={null}>
        <Sky />
        <ShoeModel />
      </Suspense>
    </Canvas>
  )
}
export default Shoe
