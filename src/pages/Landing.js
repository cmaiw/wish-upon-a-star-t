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
  margin-top: 45px;
`;

const LandingPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 670px;
  overflow: hidden;
`;

const EarthImg = styled.img`
  display: flex;
  height: auto;
  width: 100%;
  opacity: 0.6;
  position: relative;
`;

const move = keyframes`
  0% {
    transform: translate(160px, -64px);
  }
  25% {
    transform: translate(120px, -48px);
  }

  50% {
    transform: translate(80px, -32px);
  }

  75% {
    transform: translate(40px, -16x);
  }
 
  100% {
    transform: translate( 0px, 0px);
}
    `;

const AnimationContainer = styled.div`
  display: flex;
  height: auto;
  width: 70%%;
  align-self: center;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.8;
  margin-top: 45px;
`;

const ShootingStarImg = styled.img`
  display: flex;
  height: auto;
  position: relative;
  width: 80%;
  animation: ${move} 0.5s ease-in;
  margin-top: 85px;
`;

const WelcomeTxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 230px;
  min-width: 300px;
  font-size: 1em;
  color: whitesmoke;
  opacity: 0.7;
  margin: 0px;
  padding: 0px;
`;

const WelcomeTxt = styled.h2`
  color: whitesmoke;
  margin: 0px;
  padding: 5px;
`;
const WelcomeTxt2 = styled.h4`
  color: whitesmoke;
  margin: 0px;
  padding: 5px;
`;

const TelescopeIcon = styled.img`
  width: 60px;
  height: 60px;
  opacity: 0.75;
  margin: 5px;
  &:hover {
    opacity: 1;
  }
`;

const AlienIcon = styled.img`
  width: 40px;
  height: 40px;
  opacity: 0.75;
  margin: 5px;
  &:hover {
    opacity: 1;
  }
`;

const WelcomeTxt3 = styled.p`
  color: whitesmoke;
  opacity: 0.7;
  cursor: pointer;
  margin: 0px;
  padding: 5px;
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
