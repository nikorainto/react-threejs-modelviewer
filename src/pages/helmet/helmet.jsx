import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'
import Scene from './helmet_scene'
import Background from './helmet_background'
import HelmetModel from '../../converted-models/Helmet'

function Helmet() {
  return (
    <Canvas
      camera={{ position: [-10, 10, 100], fov: 45 }}
      shadowMap
      invalidateFrameloop
    >
      <Scene />
      <OrbitControls minDistance={5} maxDistance={150} />
      <Suspense fallback={null}>
        <Background />
        <HelmetModel />
      </Suspense>
    </Canvas>
  )
}
export default Helmet
