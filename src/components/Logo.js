import React from "react";
import styled from "@emotion/styled";
import planet from "../resources/planet.png";

const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 0px;
  margin: 0px;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.4em;
  color: ${(props) => props.theme.secondary};
  text-shadow: 1px 1px 2px ${(props) => props.theme.primary};
  padding: 0px;
  margin: 0px;
  letter-spacing: 2px;
  font-family: "Orbitron", sans-serif;

  @media only screen and (max-width: 280px){
    font-size: 0.85em;
  }
`;

const LogoIcon = styled.img`
  height: auto;
  width: 80px;
  margin: 30px 0px 0px 0px;
  padding: 0px;
`;

export default function Logo({ text }) {
  return (
    <Container>
      <LogoIcon src={planet} />
      <Title>{(text = "Wish upon a Star")}</Title>
    </Container>
  );
}
