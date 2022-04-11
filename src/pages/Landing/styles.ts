import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {shake} from "../../utils/animations";


export const LandingPBg = styled.div`
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

export const LandingPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 23.125rem;
  min-width: 17.5rem;
  min-height: 41.875rem;
  overflow: hidden;
  margin-top: 5rem;

  @media only screen and (min-width: 50rem){
    max-width: 30rem;
    min-height: 53rem;
    }
`;

export const EarthImg = styled.img`
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

export const move = keyframes`
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

export const AnimationContainer = styled.div`
  display: flex;
  height: auto;
  width: 80%;
  align-self: flex-end;
  justify-content: center;
  align-items: flex-start;
  margin-top: 6rem;

  @media only screen and (min-width: 23.4rem){
    margin-top: 2rem;
    }

  @media only screen and (min-width: 48rem){
    margin-top: 0;
    width: 100%;
    }
`;

export const ShootingStarImg = styled.img`
  display: flex;
  height: auto;
  position: relative;
  width: 80%;
  animation: ${move} 0.5s ease-in;
  margin-top: 0;
`;

export const WelcomeTxtContainer = styled.div`
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

  @media only screen and (min-width: 23.4rem){
  font-size: 1rem;
  max-height: 14.375rem;
    }

  @media only screen and (min-width: 48rem){
  font-size: 1.25rem;
  max-height: 14.375rem;
    }
`;

export const Heading = styled.h1`
color: ${(props) => props.theme.tertiary};
font-size: 1rem;

@media only screen and (min-width: 48rem){
  font-size: 2rem;
    }
`;

export const Accent = styled.span`
font-family: 'Lovers Quarrel', cursive;
font-weight: 800;
font-size: 3rem;

@media only screen and (min-width: 48rem){
  font-size: 6rem;
    }
`;

export const WelcomeTxt = styled.p`
  margin: 0;
  padding: 0.25rem;
`;

export const NavIcon = styled.img`
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

export const AlienIcon = styled.img`
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