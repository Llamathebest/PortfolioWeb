import { useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

function Asset({ url }) {
    const fbx = useLoader(FBXLoader, url)
    return <primitive object={fbx} dispose={null} />
}

const Test = (props)=>{
    return (
        <group dispose={null}>
            <Asset url={"/fbx/pan_cerveau.fbx"}></Asset>
        </group>
    );
}

export default (Test);