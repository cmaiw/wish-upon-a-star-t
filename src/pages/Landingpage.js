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
`;

const EarthImg = styled.img`
  display: flex;
  height: auto;
  width: 100%;
  opacity: 0.6;
  position: relative;
  z-index: 1;
`;

const move = keyframes`
    0% {
      top: -210px;
      right: -688px;
    }
    100% {
      top: 100px;
      right: 388px;
    }
    `;

const AnimationContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  align-self: center;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.8;
  margin-top: 0px;
`;

const ShootingStarImg = styled.img`
  display: flex;
  height: auto;
  position: relative;
  width: 90%;
  animation: ${move} 1s ease;
  margin-top: 80px;
`;

const WelcomeTxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 230px;
  min-width: 300px;
  font-size: 2.2em;
  color: whitesmoke;
  opacity: 0.7;
  margin-top: 0px;
  z-index: 2;
`;

const WelcomeTxt = styled.div`
  font-size: 0.7em;
  color: whitesmoke;
  margin-top: 0px;
`;
const WelcomeTxt2 = styled.div`
  font-size: 0.6em;
  color: whitesmoke;
`;

const TelescopeIcon = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0.5;

  &:hover {
    opacity: 0.9;
  }
`;

const WelcomeTxt3 = styled.div`
  font-size: 0.7em;
  color: whitesmoke;
  opacity: 0.7;
  cursor: pointer;
  margin-bottom: 0px;
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
            <TelescopeIcon src="/images/telescope.png" />
          </NavLink>
          <WelcomeTxt3>Go to Search!</WelcomeTxt3>
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
