import { OrbitControls } from '@react-three/drei';
import { Room1 } from './models/rooms/Room1';
import { MarkerCreator } from './MarkerCreator';
import { useState } from 'react';
import { useThree } from '@react-three/fiber';

export function MyScene() {
  const [markers, setMarkers] = useState([]);
  const { camera } = useThree();

  // Posicionando a câmera
  camera.position.set(6, 1, 1);

  return (
    <>
      <ambientLight />
      <Room1 />
      <MarkerCreator setMarkers={setMarkers} />
      {markers.map((marker, index) => (
        <mesh key={index} position={marker}>
          <sphereBufferGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>
      ))}
      <OrbitControls />
    </>
  );
}
