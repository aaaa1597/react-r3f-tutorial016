import React from 'react';
import './App.css';
import { Canvas, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Floor = () => {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow={true}>
      <circleGeometry args={[10]} />
      <meshStandardMaterial />
    </mesh>
  )
}

const App = () => {
  const gltf = useLoader(GLTFLoader, 'models/Totoro.glb')

  return (
    <div style={{ width: "75vw", height: "75vh" }}>
      <Canvas camera={{ position: [4, 4, 3] }} shadows>
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={Math.PI * 2} castShadow/>
        <primitive object={gltf.scene} position={[0, 1, 0]} scale={[0.1, 0.1, 0.1]} children-0-castShadow/>
        <Floor />
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper />
        <Stats />
      </Canvas>
    </div>
  );
}

export default App;
