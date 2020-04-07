import React, { useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import Scene from "./Scene.js";
import * as THREE from "three";

export default function Cover() {
  return (
    <Canvas
      concurrent
      camera={{
        fov: 50,
        position: [0, 0, 2000],
        rotation: [0, THREE.Math.degToRad(-20), THREE.Math.degToRad(180)],
        near: 0.1,
        far: 20000,
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.5} position={[300, 300, 4000]} />
      <Scene />
    </Canvas>
  );
}
