import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// @ts-ignore
import planeScene from "../assets/3d/plane.glb";
import { Euler, Vector3 } from "@react-three/fiber";

interface PlaneType {
  isRotating: boolean;
  planeScale: Vector3;
  planePosition: Vector3;
  rotation: Euler;
}
// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
const Plane = ({
  isRotating,
  planeScale,
  planePosition,
  rotation,
}: PlaneType) => {
  const ref = useRef<THREE.Mesh | null>(null);
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      // @ts-ignore
      actions["Take 001"].play();
    } else {
      // @ts-ignore
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh
      scale={planeScale}
      position={planePosition}
      rotation={rotation}
      ref={ref}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
