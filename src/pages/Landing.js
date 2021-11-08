import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { NavLink } from "react-router-dom";
import {shake} from "./../utils/animations";

const LandingPBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.secondary};
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(31, 34, 50, 1) 100%
  );
  padding-top: 3rem;
  overflow: hidden;
`;

const LandingPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 23.125rem;
  min-width: 17.5rem;
  min-height: 41.875rem;
  overflow: hidden;
  margin-top: 5rem;
`;

const EarthImg = styled.img`
  display: flex;
  height: auto;
  width: 100%;
  opacity: 0.6;
  position: fixed;
  bottom: 0;

  @media only screen and (min-width: 50rem){
    bottom: -1.25rem;
    width: 75%;
  }
`;

const move = keyframes`
  0% {
    transform: translate(10rem, -5rem);
  }
  25% {
    transform: translate(7.5rem, -3.75rem);
  }

  50% {
    transform: translate(5rem, -2.5rem);
  }

  75% {
    transform: translate(2.5px, -1.25rem);
  }
 
  100% {
    transform: translate( 0, 0);
}
    `;

const AnimationContainer = styled.div`
  display: flex;
  height: auto;
  width: 80%;
  align-self: flex-end;
  justify-content: center;
  align-items: flex-start;
  margin-top: 6rem;

  @media only screen and (min-width: 48rem){
    margin-top: 0rem;
    }

  @media only screen and (min-width: 64rem){
    margin-top: 3rem;
    }
`;

const ShootingStarImg = styled.img`
  display: flex;
  height: auto;
  position: relative;
  width: 80%;
  animation: ${move} 0.5s ease-in;
  margin-top: 0;
`;

const WelcomeTxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  max-height: 10.375rem;
  min-width: 18.75rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.tertiary};
  margin: 0;
  padding: 0;
  z-index: 3;

  @media only screen and (min-width: 48rem){
  font-size: 1rem;
  max-height: 14.375rem;
    }
`;

const Heading = styled.h1`
color: ${(props) => props.theme.tertiary};
font-size: 1rem;

@media only screen and (min-width: 48rem){
  font-size: 1.5rem;
    }
`;

const Accent = styled.span`
font-family: 'Lovers Quarrel', cursive;
font-weight: 800;
font-size: 3rem;

@media only screen and (min-width: 48rem){
  font-size: 6rem;
    }
`;

const WelcomeTxt = styled.p`
  margin: 0;
  padding: 0.25rem;
`;

const NavIcon = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.125rem;
  margin: 0.25rem;
  &:hover {
    background-color: rgba(255,255,255, 0.3);
    border-radius: 50%;
  }
  @media only screen and (min-width: 48rem){
    width: 3.75rem;
  height: 3.75rem;
  padding: 0.25rem;
    }

`;

const AlienIcon = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  padding: 0.125rem;
  margin: 0.25rem;
  animation: ${shake} 5s; 
    animation-iteration-count:infinite;
    animation-direction: alternate-reverse;
  &:hover {
    background-color: rgba(255,255,255, 0.3);
    border-radius: 50%;
  }
`;

function LandingPage() {
  return (
    <LandingPBg>
      <LandingPContainer>
        <AnimationContainer>
          <ShootingStarImg src="/images/shootingstar.png" alt="shootingstar" />
        </AnimationContainer>
        <Heading><Accent>W</Accent>ish upon a star...</Heading>
        <WelcomeTxtContainer>
          <WelcomeTxt>Welcome Adventurer, </WelcomeTxt>
          <WelcomeTxt>Let us discover space!</WelcomeTxt>
          <NavLink to="/gallery">
            <NavIcon src="/images/gallery.png" alt="gallery-icon" />
          </NavLink>
          <NavLink to="/image-search">
            <NavIcon src="/images/telescope.png" alt="telescope-icon" />
          </NavLink>
          <WelcomeTxt>Go to space!</WelcomeTxt>
          <NavLink to="/About">
            <AlienIcon src="/images/alien.png" alt="alien-icon" />
          </NavLink>
          <WelcomeTxt>First Time here? Click the Alien!</WelcomeTxt>
        </WelcomeTxtContainer>
        <EarthImg
          src="/images/earth_glowing.png"
          alt="Earth from space glowing"
        />
      </LandingPContainer>
    </LandingPBg>
  );
}

export default LandingPage;
