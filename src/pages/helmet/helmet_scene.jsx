import React from 'react'

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[0, 300, 500]} />
      <pointLight position={[500, 100, 0]} />
      <pointLight position={[0, 100, -500]} />
      <pointLight position={[0, -100, 500]} />
    </>
  )
}

export default Scene
