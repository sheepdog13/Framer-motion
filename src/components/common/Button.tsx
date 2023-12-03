import React, { memo } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button`
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
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default memo(Button);
