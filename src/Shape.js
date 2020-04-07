import * as THREE from "three";
import { SVGLoader as loader } from "three/examples/jsm/loaders/SVGLoader";
import flatten from "lodash-es/flatten";
import React, { useState, useEffect } from "react";
// A React renderer for Three-js: https://github.com/drcmda/react-three-fiber
import { Canvas } from "react-three-fiber";
// A React x-platform animation library: https://github.com/react-spring/react-spring
import { useTransition, useSpring, animated as a } from "react-spring/three";
import "./App.css";

/** This component renders a shape */
export default function Shape({
  shape,
  rotation,
  position,
  color,
  opacity,
  index,
}) {
  return (
    <a.mesh
      rotation={rotation}
      position={position.interpolate((x, y, z) => [x, y, z + -index * 50])}
    >
      <a.meshPhongMaterial
        attach="material"
        color={color}
        opacity={opacity}
        side={THREE.DoubleSide}
        depthWrite={false}
        transparent
      />
      <shapeBufferGeometry attach="geometry" args={[shape]} />
    </a.mesh>
  );
}

// // ReactDOM.render(<Cover />, document.getElementById("root"));

// import * as THREE from "three";
// import ReactDOM from "react-dom";
// import React, { useState, useEffect } from "react";
// import { Canvas } from "react-three-fiber";
// import flatten from "lodash-es/flatten";
// import { SVGLoader as loader } from "./SVGLoader";
// import "./App.css";

// const svgResource = new Promise((resolve) =>
//   new loader().load(
//     "https://raw.githubusercontent.com/JX-JingxuanCao/portfolio/master/public/test.svg",
//     (shapes) =>
//       resolve(
//         flatten(
//           shapes.map((group, index) =>
//             group
//               .toShapes(true)
//               .map((shape) => ({ shape, color: group.color, index }))
//           )
//         )
//       )
//   )
// );

// function Shape({ shape, position, color, opacity, index }) {
//   return (
//     <mesh position={[0, 0, -index * 50]}>
//       <meshPhongMaterial
//         attach="material"
//         color={color}
//         side={THREE.DoubleSide}
//       />
//       <shapeBufferGeometry attach="geometry" args={[shape]} />
//     </mesh>
//   );
// }

// function Scene() {
//   const [shapes, set] = useState([]);
//   useEffect(() => void svgResource.then(set), []);
//   return (
//     <group
//       position={[1600, -700, 0]}
//       rotation={[0, THREE.Math.degToRad(180), 0]}
//     >
//       {shapes.map((item) => (
//         <Shape key={item.shape.uuid} {...item} />
//       ))}
//     </group>
//   );
// }

// export default function Cover() {
//   return (
//     <div class="main">
//       <Canvas
//         camera={{
//           fov: 50,
//           position: [0, 0, 2000],
//           rotation: [0, THREE.Math.degToRad(-20), THREE.Math.degToRad(180)],
//           far: 20000,
//         }}
//       >
//         <ambientLight intensity={0.5} />
//         <spotLight intensity={0.5} position={[300, 300, 4000]} />
//         <Scene />
//       </Canvas>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'))
