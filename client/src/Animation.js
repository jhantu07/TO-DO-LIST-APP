import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Animation = () => {
   return (
      <Canvas>
         <OrbitControls enableZoom={false} />
         <ambientLight intensity={0.5} />
         <directionalLight position={[-2, 5, 2]} />
         <Sphere visible args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
               color="#8352fd"
               attach="material"
               distort={0.3}
               speed={1.5}
            />
         </Sphere>
      </Canvas>
   );
};

export default Animation;
