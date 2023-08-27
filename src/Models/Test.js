import "./Model.scss";
// import { Entity, Scene } from "aframe-react";
// import "aframe";

// const Model = () => {
//   return (
//     <div>
//       <a-scene>
//         <a-assets>
//           <a-asset-item id="fbx-model" src="fbx/recorder.gltf"></a-asset-item>
//         </a-assets>
//         {/* <a-sky color="#87cefa"></a-sky> */}
//         <a-entity light="type: ambient; intensity: 0.5"></a-entity>
//         <a-entity light="type: directional; intensity: 0.5" position="2 4 -3"></a-entity>
//         <a-entity position="0 0 0" rotation="0 180 0">
//           <a-gltf-model src="#fbx-model"></a-gltf-model>
//         </a-entity>
//       </a-scene>
//       <h2>That's great</h2>
//     </div>
//   );
// };

// export default Model;

import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({scale, pos, rot}) => {
  return (
    <div className="model">
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 4, -3]} intensity={0.5} />
        <Suspense fallback={null}>
          <ModelComponent scale={scale} pos={pos} rot={rot} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const ModelComponent = ({scale, pos, rot}) => {
  const gltf = useLoader(GLTFLoader, "fbx/Arbre.gltf");
  const modelRef = useRef();

  // Adjust the scale of the model
  gltf.scene.scale.set(.5 ,.5, .5); // Adjust the values as needed

  // Move the model closer to the camera along the z-axis
  gltf.scene.position.set(10, -2, -1); // Adjust the value to bring the model up front

  // Animation function
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += .01; // Rotate the model around the y-axis
      // modelRef.current.rotation.x += 0.001; // Rotate the model around the y-axis
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};

export default Model;



