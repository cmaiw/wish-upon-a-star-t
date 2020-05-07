import React from "react";
import styled from "@emotion/styled";
import planet from "../resources/planet.png";

const Container = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  z-index: 1;
  padding: 0px;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 1.6em;
  color: ${(props) => props.theme.secondary};
  text-shadow: 1px 1px 2px ${(props) => props.theme.primary};
  padding: 3px;
  letter-spacing: 2px;
  font-family: "Orbitron", sans-serif;
`;

const LogoIcon = styled.img`
  height: auto;
  width: 140px;
  margin-top: 30px;
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
