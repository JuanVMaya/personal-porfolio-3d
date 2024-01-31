import React from "react";
import { useGLTF } from "@react-three/drei";
//@ts-ignore
import birdScene from "../assets/3d/Bird.glb";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh position={[3, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
