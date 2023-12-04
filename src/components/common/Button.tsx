import { motion } from "framer-motion";
import React, { memo } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled(motion.button)`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0;
  color: #fff;
`;

function Button({ children, onClick }: ButtonProps) {
  return (
    <StyledButton whileHover={{ scale: "2" }} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default memo(Button);
