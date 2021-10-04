import React from "react";
import styled from "@emotion/styled";
import planet from "../resources/planet.png";

const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.4em;
  color: ${(props) => props.theme.secondary};
  text-shadow: 1px 1px 2px ${(props) => props.theme.primary};
  padding: 0;
  margin: 0;
  letter-spacing: 2px;
  font-family: "Orbitron", sans-serif;

  @media only screen and (max-width: 17.5rem){
    font-size: 0.85em;
  }
`;

const LogoIcon = styled.img`
  height: auto;
  width: 5rem;
  margin: 2rem 0 0 0;
  padding: 0;
`;

export default function Logo({ text }) {
  return (
    <Container>
      <LogoIcon src={planet} />
      <Title>{(text = "Wish upon a Star")}</Title>
    </Container>
  );
}
