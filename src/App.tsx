import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import Drag from "./components/Drag";
import MotionValues from "./components/MotionValues";
import Path from "./components/Path";
import Presence from "./components/Presence";
import Slider from "./components/Slider";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

function App() {
  return (
    <>
      <Slider />
    </>
  );
}

export default App;
