import { Canvas } from "react-three-fiber";
import { Entity, Scene } from "aframe-react";
import "./Model.scss";

const Model = () => {
  return (
    <div>
      <Scene>
        <a-assets>
          <a-asset-item id="fbx-model" src="fbx/recorder.gltf"></a-asset-item>
        </a-assets>
        <a-sky color="#87cefa"></a-sky>
        <a-entity light="type: ambient; intensity: 0.5"></a-entity>
        <a-entity light="type: directional; intensity: 0.5" position="2 4 -3"></a-entity>
        <a-entity position="0 0 0" rotation="0 180 0">
          <a-gltf-model src="#fbx-model"></a-gltf-model>
        </a-entity>
        <Canvas>
          {/* Your 3D models rendered using react-three-fiber */}
        </Canvas>
      </Scene>
      <h2>That's great</h2>
    </div>
  );
};

export default Model;
