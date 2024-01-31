import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

// @ts-ignore
import skyScene from "../assets/3d/sky.glb";

interface SkyTypes {
  isRotating: boolean;
}

const Sky = ({ isRotating }: SkyTypes) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<Mesh | null>(null);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current!.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
