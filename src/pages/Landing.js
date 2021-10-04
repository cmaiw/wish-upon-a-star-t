import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { NavLink } from "react-router-dom";

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
    rgba(20, 45, 93, 0.9374124649859944) 100%
  );
  padding-top: 3rem;
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
  width: 75%;
  opacity: 0.6;
  position: fixed;
  bottom: 0;

  @media only screen and (min-width: 50rem){
    bottom: -1.25rem;
  }
`;

const move = keyframes`
  0% {
    transform: translate(10rem, -4rem);
  }
  25% {
    transform: translate(7.5rem, -3rem);
  }

  50% {
    transform: translate(5rem, -2rem);
  }

  75% {
    transform: translate(2.5px, -1rem);
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
  align-items: center;
  opacity: 0.8;
  margin-top: 5rem;
`;

const ShootingStarImg = styled.img`
  display: flex;
  height: auto;
  position: relative;
  width: 80%;
  animation: ${move} 0.25s ease-in;
  margin-top: 0;
`;

const WelcomeTxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  max-height: 14.375rem;
  min-width: 18.75rem;
  font-size: 1em;
  color: whitesmoke;
  opacity: 0.7;
  margin: 0;
  padding: 0;
  z-index: 3;
`;

const WelcomeTxt = styled.h2`
  color: whitesmoke;
  margin: 0;
  padding: 0.25rem;
`;
const WelcomeTxt2 = styled.h4`
  color: whitesmoke;
  margin: 0;
  padding: 0.25rem;
`;

const TelescopeIcon = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  opacity: 0.9;
  margin: 0.25rem;
  &:hover {
    opacity: 1;
  }
`;

const AlienIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  opacity: 0.9;
  margin: 0.25rem;
  &:hover {
    opacity: 1;
  }
`;

const WelcomeTxt3 = styled.p`
  color: whitesmoke;
  opacity: 0.7;
  cursor: pointer;
  margin: 0;
  padding: 0.25rem;
`;

function LandingPage() {
  return (
    <LandingPBg>
      <LandingPContainer>
        <AnimationContainer>
          <ShootingStarImg src="/images/shootingstar.png" alt="shootingstar" />
        </AnimationContainer>
        <WelcomeTxtContainer>
          <WelcomeTxt>Welcome Adventurer!</WelcomeTxt>
          <WelcomeTxt2>Let us discover space!</WelcomeTxt2>
          <NavLink to="/image-search">
            <TelescopeIcon src="/images/telescope.png" alt="telescope-icon" />
          </NavLink>
          <WelcomeTxt3>Go to space!</WelcomeTxt3>
          <NavLink to="/About">
            <AlienIcon src="/images/alien.png" alt="alien-icon" />
          </NavLink>
          <WelcomeTxt3>First Time here? Click the Alien!</WelcomeTxt3>
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
