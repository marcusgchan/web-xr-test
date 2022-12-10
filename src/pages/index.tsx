import { type NextPage } from "next";
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";

// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
};

export default Home;
