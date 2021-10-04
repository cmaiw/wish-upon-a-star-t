import React from "react";
import styled from "@emotion/styled";

const AppBar = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.quinary};
  height: 3.75rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #82122c;
  box-shadow: 0.625rem 0.625rem 1.25rem 0 rgba(28, 14, 14, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default function Header() {
  return (
    <>
      <AppBar></AppBar>
    </>
  );
}
