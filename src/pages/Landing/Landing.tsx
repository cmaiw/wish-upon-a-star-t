import React from "react";
import { NavLink } from "react-router-dom";
import {LandingPBg, LandingPContainer, AnimationContainer, ShootingStarImg, Heading, Accent, WelcomeTxt, WelcomeTxtContainer, NavIcon, AlienIcon, EarthImg } from './styles'

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
          alt="Earth-from-space-glowing"
        />
      </LandingPContainer>
    </LandingPBg>
  );
}

export default LandingPage;
