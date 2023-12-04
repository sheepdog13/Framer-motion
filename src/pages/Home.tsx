import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import SvgIcon from "@mui/material/SvgIcon";
import AnimationIcon from "@mui/icons-material/Animation";
import { motion } from "framer-motion";
const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  padding: 10px 40px;
`;

function Home() {
  return (
    <>
      <Header>
        <Button>
          <SvgIcon component={AnimationIcon} sx={{ fontSize: 40 }} />
        </Button>
      </Header>
    </>
  );
}

export default Home;
