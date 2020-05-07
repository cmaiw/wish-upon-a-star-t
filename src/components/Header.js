import React from "react";
import styled from "@emotion/styled";

const AppBar = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.quinary};
  height: 68px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #82122c;
  box-shadow: 10px 10px 22px 0px rgba(28, 14, 14, 1);
  padding-left: 10px;
  padding-right: 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
`;

export default function Header() {
  return (
    <>
      <AppBar></AppBar>
    </>
  );
}
