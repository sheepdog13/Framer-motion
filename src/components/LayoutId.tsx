import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffffff;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function LayoutId() {
  const [id, setId] = useState<null | string>(null);
  const [active, SetActive] = useState(true);
  return (
    <Wrapper>
      <Grid>
        <Box
          whileHover={{ scale: 1.2 }}
          onClick={() => setId("1")}
          layoutId={"1"}
        />
        <Box onClick={() => setId("2")} layoutId={"2"}>
          {active ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box onClick={() => setId("3")} layoutId={"3"}>
          {!active ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          whileHover={{ scale: 1.2 }}
          onClick={() => setId("4")}
          layoutId={"4"}
        />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <button
        onClick={() => {
          SetActive((pre) => !pre);
        }}
      >
        switch
      </button>
    </Wrapper>
  );
}

export default LayoutId;
