import React, { useState } from "react";
import Home from "./pages/Home";
import styled from "styled-components";
import { motion } from "framer-motion";

interface IPointer {
  x: number | undefined;
  y: number | undefined;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Pointer = styled(motion.button)<IPointer>`
  position: absolute;
  background: none;
  border: 2px solid #999999;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  transform: ${(props) => `translate3d(${props.x}px, ${props.y}px, 0px)`}
    translate(-50%, -50%) scale(0.5, 0.5);
  transition: 0.1s;
`;

const PointerVariants = {
  start: {},
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const xyHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setXY({ x: mouseX, y: mouseY });
  };
  return (
    <>
      <Wrapper onMouseMove={xyHandler}>
        <Pointer x={xy.x} y={xy.y} />
        <Home />
      </Wrapper>
    </>
  );
}

export default App;
