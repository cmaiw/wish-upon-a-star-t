import React from "react";
import styled from "@emotion/styled";

const AppBar = styled.header`
  display: flex;
  background: ${(props) => props.theme.quinary};
  background: ${(props) => props.theme.headerGradient};
  height: 4.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #82122c;
  box-shadow: 0.625rem 0.625rem 1.25rem 0 rgba(28, 14, 14, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  clip-path: polygon(
    0 0,
    8% 100%,
    190% -25%,
    20% -20%
  );

  @media only screen and (min-width: 768px){
    height: 5.75rem;
    clip-path: polygon(
      0 0,
      6% 100%,
      190% -25%,
      20% -20%
    );
  }
  @media only screen and (min-width: 1024px){
    height: 5.75rem;
    clip-path: polygon(
      0 0,
      4% 100%,
      190% -25%,
      20% -20%
    );
  }
`;

export default function Header() {
  return (
    <>
      <AppBar />
    </>
  );
}
