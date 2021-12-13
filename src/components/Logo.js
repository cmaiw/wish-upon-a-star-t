import React from "react";
import styled from "@emotion/styled";
import planet from "../resources/planet.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 0;
  margin-top: -1rem;
  position: relative;

  @media only screen and (min-width: 768px){
    font-size: 1.4em;
    width: 80%;
  }
`;

const LogoIcon = styled.img`
position: absolute;
  height: auto;
  width: 4.75rem;
  padding: 0;
  margin: 4rem 0 0 -0.5rem;
  /* transform: rotate(0deg); */

  @media only screen and (min-width: 540px){
    margin: 4rem 0 0 0.5rem;
    width: 5rem;
  }

  @media only screen and (min-width: 768px){
    margin: 7rem 0 0 0;
    width: 6.5rem;
  }

  @media only screen and (min-width: 1024px){
    width: 7rem;
  }
`;

export default function Logo() {
  return (
    <Container>
      <LogoIcon src={planet} />
    </Container>
  );
}